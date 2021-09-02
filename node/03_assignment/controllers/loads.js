const { Load, validateLoad } = require('../models/load')
const { Truck } = require('../models/truck')
const { BadRequest, NotFound } = require('../errors')

const getLoads = async (req, res) => {
	const { _id, role } = req.user

	// getting query params
	const { status } = req.query
	const offset = Number(req.query.offset) || 0
	let limit = Number(req.query.limit)

	// validate limit
	if (limit < 10) limit = 10
	else if (limit > 50) throw new BadRequest('Limit cannot be more than 50')

	// getting loads
	if (role === 'SHIPPER') {
		let loads = await Load.find({ created_by: _id }).select(['-__v']).skip(offset).limit(limit)
		return res.status(200).json({ loads })
	} else {
		let activeLoad = await Load.findOne({ assigned_to: _id, status: 'ASSIGNED' })
		let completedLoads = await Load.findOne({ assigned_to: _id, status: 'SHIPPED' }).skip(offset).limit(limit)
		const loads = [activeLoad, ...completedLoads]
		return res.status(200).json({ loads })
	}
}

const createLoad = async (req, res) => {
	// validate user input
	const { error } = validateLoad(req.body)
	if (error) throw new BadRequest(error.details[0].message)

	// validate user role
	const { _id, role } = req.user
	if (role === 'DRIVER') throw new BadRequest('Only Shippers can add loads.')

	// create a new load
	const { name, payload, pickup_address, delivery_address, dimensions } = req.body
	const load = new Load({
		created_by: _id,
		name,
		payload,
		pickup_address,
		delivery_address,
		dimensions,
	})
	await load.save()

	res.status(200).json({ message: 'Load has been created successfully' })
}

const getLoadById = async (req, res) => {
	const { _id, role } = req.user
	const { id } = req.params
	let load

	if (role === 'SHIPPER') load = await Load.findOne({ created_by: _id, _id: id }).select(['-__v'])
	else load = await Load.findOne({ assigned_to: _id, _id: id }).select(['-__v'])

	if (!load) throw new NotFound(`Load with ID ${id} doesn't exist.`)

	res.status(200).json({ load })
}

const updateLoadById = async (req, res) => {
	// validate user input
	const { error } = validateLoad(req.body)
	if (error) throw new BadRequest(error.details[0].message)

	const { _id, role } = req.user
	const { id } = req.params

	// validate user's role
	if (role === 'DRIVER') throw new BadRequest('Only Shippers can edit loads.')

	// validate load
	const load = await Load.findOne({ _id: id, created_by: _id })
	if (!load) throw new NotFound(`Load with ID ${id} doesn't exist.`)
	if (load.status !== 'NEW') throw new BadRequest('You can only edit loads with status NEW.')

	await Load.findOneAndUpdate({ _id: id, created_by: _id }, req.body)
	res.status(200).json({ message: 'Load details have been changed successfully' })
}

const deleteLoadById = async (req, res) => {
	const { _id, role } = req.user
	// validate user's role
	if (role === 'DRIVER') throw new BadRequest('Only Shippers can delete loads.')

	// validate load
	const { id } = req.params
	const load = await Load.findOne({ _id: id, created_by: _id })
	if (!load) throw new NotFound(`Load with ID ${id} doesn't exist.`)
	if (load.status !== 'NEW') throw new BadRequest('You can only delete loads with status NEW.')

	await Load.findOneAndRemove({ _id: id, created_by: _id })
	res.status(200).json({ message: 'Load has been deleted successfully.' })
}

const postLoadById = async (req, res) => {
	// validate user's role
	const { _id, role } = req.user
	if (role === 'DRIVER') throw new BadRequest('Only Shippers can delete loads.')

	// validate load
	const { id } = req.params
	const load = await Load.findOne({ _id: id, created_by: _id })
	if (!load) throw new NotFound(`Load with ID ${id} doesn't exist.`)

	// change load's status
	load.status = 'POSTED'
	load.logs.push({ message: 'Load status is changed to POSTED.', time: new Date(Date.now()) })
	await load.save()

	// get, filter available trucks and assign load
	let isLoadAssigned = false
	const availableTrucks = await Truck.find({ status: 'IS', assigned_to: { $ne: null } })
	availableTrucks.some(async (truck) => {
		if (
			truck.payload > load.payload &&
			truck.dimensions.length > load.dimensions.length &&
			truck.dimensions.height > load.dimensions.height &&
			truck.dimensions.width > load.dimensions.width
		) {
			// update load and truck properties
			load.assigned_to = truck.assigned_to
			load.state = 'En route to Pick Up'
			load.status = 'ASSIGNED'
			load.logs.push({
				message: `Load assigned to driver with ID ${truck.assigned_to}`,
				time: new Date(Date.now()),
			})
			truck.status = 'OL'
		}

		isLoadAssigned = true
		await truck.save()
		return true
	})

	// setting response message
	let message = 'Load has been posted successfully.'
	let driver_found = true

	// if driver isn't found
	if (!isLoadAssigned) {
		load.status = 'NEW'
		load.logs.push({
			message: 'No driver found. Status is changed back to NEW.',
			time: new Date(Date.now()),
		})

		message = 'No driver found'
		driver_found = false
	}

	await load.save()
	res.status(200).json({ message, driver_found })
}

module.exports = { createLoad, getLoads, getLoadById, updateLoadById, deleteLoadById, postLoadById }

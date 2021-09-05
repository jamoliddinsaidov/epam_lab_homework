const { Load, validateLoad } = require('../models/load')
const { Truck } = require('../models/truck')
const { BadRequest, NotFound } = require('../errors')

const getLoads = async (req, res) => {
	const { _id, role } = req.user

	// getting query params
	const { status } = req.query
	const queryObj = {}
	if (status) queryObj.status = status
	const offset = Number(req.query.offset) || 0
	let limit = Number(req.query.limit)

	// validate limit
	if (limit < 10) limit = 10
	else if (limit > 50) throw new BadRequest('Limit cannot be more than 50')

	// getting loads
	if (role === 'SHIPPER') {
		queryObj.created_by = _id
		let loads = await Load.find(queryObj).select(['-__v']).skip(offset).limit(limit)
		return res.status(200).json({ loads })
	} else {
		let activeLoad = await Load.findOne({ assigned_to: _id, status: 'ASSIGNED' })
		let completedLoads = await Load.find({ assigned_to: _id, status: 'SHIPPED' }).skip(offset).limit(limit)
		let loads = []
		console.log(completedLoads)

		if (activeLoad && completedLoads) loads = [activeLoad, ...completedLoads]
		else if (completedLoads) loads = [...completedLoads]
		else if (activeLoad) loads = [activeLoad]
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

const getActiveLoadForDriver = async (req, res) => {
	// validate user role
	const { _id, role } = req.user
	if (role === 'SHIPPER') throw new BadRequest('Only Drivers can see active loads.')

	// get the active load and validate
	const load = await Load.findOne({ assigned_to: _id, status: 'ASSIGNED' })
	if (!load) throw new BadRequest('You currently do not have an assigned truck.')

	res.status(200).json({ load })
}

const changeLoadState = async (req, res) => {
	// validate user role
	const { _id, role } = req.user
	if (role === 'SHIPPER') throw new BadRequest("Only Drivers can change load's state.")

	// get the active load and validate
	const load = await Load.findOne({ assigned_to: _id, status: 'ASSIGNED' })
	if (!load) throw new BadRequest('You currently do not have an assigned truck.')

	// get assigned truck
	const truck = await Truck.findOne({ assigned_to: _id })

	// change state & status
	const states = ['En route to Pick Up', 'Arrived to Pick Up', 'En route to delivery', 'Arrived to delivery']
	states.some((state, idx) => {
		if (state === load.state && states.length - 1 > idx) {
			load.state = states[idx + 1]
			load.logs.push({
				message: `Load states changed to ${load.state}`,
				time: new Date(Date.now()),
			})
			return true
		}
	})

	if (load.state === 'Arrived to delivery') {
		load.status = 'SHIPPED'
		load.logs.push({
			message: `Load status changed to ${load.status}.`,
			time: new Date(Date.now()),
		})
		truck.status = 'IS'
	}

	await load.save()
	await truck.save()
	res.status(200).json({ message: `Load state changed to '${load.state}'` })
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

	// validate user's role
	const { _id, role } = req.user
	if (role === 'DRIVER') throw new BadRequest('Only Shippers can edit loads.')

	// validate load
	const { id } = req.params
	const load = await Load.findOne({ _id: id, created_by: _id })
	if (!load) throw new NotFound(`Load with ID ${id} doesn't exist.`)
	if (load.status !== 'NEW') throw new BadRequest('You can only edit loads with status NEW.')

	await Load.findOneAndUpdate({ _id: id, created_by: _id }, req.body)
	res.status(200).json({ message: 'Load details have been changed successfully' })
}

const deleteLoadById = async (req, res) => {
	// validate user's role
	const { _id, role } = req.user
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
	// let isLoadAssigned = false
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
				message: `Load is assigned to driver with ID ${truck.assigned_to}`,
				time: new Date(Date.now()),
			})
			truck.status = 'OL'
		}

		await truck.save()
		return true
	})

	// setting response message
	let message = 'Load has been posted successfully.'
	let driver_found = true

	// if driver isn't found
	if (!load.assigned_to) {
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

const getShippingInfo = async (req, res) => {
	// validate user's role
	const { _id, role } = req.user
	if (role === 'DRIVER') throw new BadRequest('Only Shippers can see shipping info.')

	// validate load
	const { id } = req.params
	const load = await Load.findOne({ _id: id, created_by: _id, status: 'ASSIGNED' })
	if (!load) throw new NotFound(`Load with ID ${id} doesn't exist.`)

	// get assigned truck
	let truck = await Truck.findOne({ assigned_to: load.assigned_to })

	res.status(200).json({ load, truck })
}

module.exports = {
	getLoads,
	createLoad,
	getActiveLoadForDriver,
	changeLoadState,
	getLoadById,
	updateLoadById,
	deleteLoadById,
	postLoadById,
	getShippingInfo,
}

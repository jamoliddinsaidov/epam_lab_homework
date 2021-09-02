const { Truck, validateTruck } = require('../models/truck')
const { BadRequest, NotFound } = require('../errors')

const getTrucks = async (req, res) => {
	// validate user role
	const { _id, role } = req.user
	if (role === 'SHIPPER') throw new BadRequest('Only Drivers can see trucks.')

	const trucks = await Truck.find({ created_by: _id }).select(['-__v', '-dimensions', '-payload'])
	res.status(200).json({ trucks })
}

const createTruck = async (req, res) => {
	// validate user input
	const { error } = validateTruck(req.body)
	if (error) throw new BadRequest(error.details[0].message)

	// validate user role
	const { _id, role } = req.user
	if (role === 'SHIPPER') throw new BadRequest('Only Drivers can add trucks.')

	const { type } = req.body
	let payload
	let dimensions = {}

	// set dimension and payload properties of a truck
	if (type === 'SPRINTER') {
		payload = 1700
		dimensions = {
			width: 300,
			length: 250,
			height: 170,
		}
	} else if (type === 'SMALL STRAIGHT') {
		payload = 2500
		dimensions = {
			width: 500,
			length: 250,
			height: 170,
		}
	} else if (type === 'LARGE STRAIGHT') {
		payload = 4000
		dimensions = {
			width: 700,
			length: 350,
			height: 200,
		}
	}

	// create truck
	const truck = new Truck({
		created_by: _id,
		type,
		payload,
		dimensions,
	})
	await truck.save()

	res.status(200).json({ message: 'Truck created successfully' })
}

const getTruckById = async (req, res) => {
	// get required IDs and validate user role
	const { _id, role } = req.user
	if (role === 'SHIPPER') throw new BadRequest('Only Drivers can get trucks by id.')

	// find and validate the truck
	const { id } = req.params
	const truck = await Truck.findOne({ created_by: _id, _id: id }).select(['-__v', '-dimensions', '-payload'])
	if (!truck) throw new NotFound(`Truck with ID ${id} does not exist.`)

	res.status(200).json({ truck })
}

const updateTruck = async (req, res) => {
	// validate user input
	const { error } = validateTruck(req.body)
	if (error) throw new BadRequest(error.details[0].message)

	// get required IDs and validate user role
	const { _id, role } = req.user
	if (role === 'SHIPPER') throw new BadRequest('Only Drivers can update trucks.')

	// find and validate the truck
	const { id } = req.params
	const truck = await Truck.findOne({ created_by: _id, _id: id })

	if (!truck) throw new NotFound(`Truck with ID ${id} does not exist.`)
	if (!truck.status === 'OL') throw new BadRequest('You can not update trucks On Load.')
	if (!truck.created_by === !truck.assigned_to) throw new BadRequest('You can only update trucks that are not assigned to you.')

	const { type } = req.body
	await Truck.findOneAndUpdate({ created_by: _id, _id: id }, { type })
	res.status(200).json({ message: 'Truck details changed successfully.' })
}

const deleteTruck = async (req, res) => {
	// get required IDs and validate user role
	const { _id, role } = req.user
	if (role === 'SHIPPER') throw new BadRequest('Only Drivers can delete trucks.')

	// find and validate the truck
	const { id } = req.params
	const truck = await Truck.findOne({ created_by: _id, _id: id })

	if (!truck) throw new NotFound(`Truck with ID ${id} does not exist.`)
	if (!truck.status === 'OL') throw new BadRequest('You can not delete trucks On Load.')
	if (!truck.created_by === !truck.assigned_to) throw new BadRequest('You can only delete trucks that are not assigned to you.')

	await Truck.findOneAndDelete({ created_by: _id, _id: id })
	res.status(200).json({ message: 'Truck has been deleted successfully.' })
}

const assignTruck = async (req, res) => {
	// get required IDs and validate user role
	const { _id, role } = req.user
	if (role === 'SHIPPER') throw new BadRequest('Only Drivers can assign trucks.')

	// find and validate the truck
	const { id } = req.params
	const truck = await Truck.findOne({ created_by: _id, _id: id })

	if (!truck) throw new NotFound(`Truck with ID ${id} does not exist.`)
	if (!truck.status === 'OL') throw new BadRequest('You can not assign trucks On Load.')
	if (!truck.created_by === !truck.assigned_to) throw new BadRequest('You can only assign trucks that are not assigned to you.')

	await Truck.findOneAndUpdate({ created_by: _id, _id: id }, { assigned_to: _id })

	res.status(200).json({ message: 'Truck has been assigned successfully.' })
}

module.exports = { createTruck, getTrucks, getTruckById, updateTruck, deleteTruck, assignTruck }

const { Truck, validateTruck } = require('../models/truck')
const { BadRequest, NotFound } = require('../errors')

const getTrucks = async (req, res) => {
	// validate user role
	const { _id, role } = req.user
	if (role === 'SHIPPER') throw new BadRequest('Only Drivers can add trucks.')

	const trucks = await Truck.find({ created_by: _id }).select(['-__v'])
	res.status(200).json({ trucks })
}

const createTruck = async (req, res) => {
	// validate user input
	const { error } = validateTruck(req.body)
	if (error) throw new BadRequest(error.details[0].message)

	// validate user role
	const { _id, role } = req.user
	if (role === 'SHIPPER') throw new BadRequest('Only Drivers can add trucks.')

	// create truck
	const truck = new Truck({
		created_by: _id,
		type: req.body.type,
	})
	await truck.save()

	res.status(200).json({ message: 'Truck created successfully' })
}

const getTruckById = async (req, res) => {
	// get required IDs and validate user role
	const { _id, role } = req.user
	if (role === 'SHIPPER') throw new BadRequest('Only Drivers can add trucks.')

	// find and validate the truck
	const { id } = req.params
	const truck = await Truck.findOne({ created_by: _id, _id: id }).select(['-__v'])
	if (!truck) throw new NotFound(`Truck with ID ${id} does not exist.`)

	res.status(200).json({ truck })
}

const updateTruck = async (req, res) => {
	// validate user input
	const { error } = validateTruck(req.body)
	if (error) throw new BadRequest(error.details[0].message)

	// get required IDs and validate user role
	const { _id, role } = req.user
	if (role === 'SHIPPER') throw new BadRequest('Only Drivers can add trucks.')

	// find and validate the truck
	const { id } = req.params
	const truck = await Truck.findOne({ created_by: _id, _id: id })
	if (!truck) throw new NotFound(`Truck with ID ${id} does not exist.`)

	const { type } = req.body
	await Truck.findOneAndUpdate({ created_by: _id, _id: id }, { type })
	res.status(200).json({ message: 'Truck details changed successfully.' })
}

const deleteTruck = async (req, res) => {
	// get required IDs and validate user role
	const { _id, role } = req.user
	if (role === 'SHIPPER') throw new BadRequest('Only Drivers can add trucks.')

	const { id } = req.params
	await Truck.findOneAndDelete({ created_by: _id, _id: id })
	res.status(200).json({ message: 'Truck has been deleted successfully.' })
}

module.exports = { createTruck, getTrucks, getTruckById, updateTruck, deleteTruck }

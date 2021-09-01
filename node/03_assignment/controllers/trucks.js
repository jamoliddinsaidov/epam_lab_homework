const { Truck, validateTruck } = require('../models/truck')
const { BadRequest, NotFound } = require('../errors')

const getTrucks = async (req, res) => {
	const { _id } = req.user
	const trucks = await Truck.find({ created_by: _id })

	res.status(200).json({ trucks })
}

const createTruck = async (req, res) => {
	// validate user inputs
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
	// get required IDs
	const { _id } = req.user
	const { id } = req.params

	// find and validate the truck
	const truck = await Truck.findOne({ created_by: _id, _id: id })
	if (!truck) throw new NotFound(`Truck with ID ${id} does not exist.`)

	res.status(200).json({ truck })
}

module.exports = { createTruck, getTrucks, getTruckById }

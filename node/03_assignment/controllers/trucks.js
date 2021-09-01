const { Truck, validateTruck } = require('../models/truck')
const { BadRequest } = require('../errors')

const createTruck = async (req, res) => {
	const { error } = validateTruck(req.body)
	if (error) throw new BadRequest(error.details[0].message)

	const { _id, role } = req.user
	if (role === 'SHIPPER') throw new BadRequest('Only Drivers can add trucks.')

	const truck = new Truck({
		created_by: _id,
		type: req.body.type,
	})
	await truck.save()

	res.status(200).json({ message: 'Truck created successfully' })
}

module.exports = { createTruck }

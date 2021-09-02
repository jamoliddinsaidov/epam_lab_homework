const { Load, validateLoad } = require('../models/load')
const { BadRequest, NotFound } = require('../errors')

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

module.exports = { createLoad }

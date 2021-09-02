const { Load, validateLoad } = require('../models/load')
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
	let result
	if (role === 'SHIPPER') {
		result = Load.find({ created_by: _id })
	} else {
		if (status) result = Load.find({ assigned_to: _id, status: status })
		else result = Load.find({ assigned_to: _id })
	}

	const loads = await result.select(['-__v']).skip(offset).limit(limit)

	res.status(200).json({ loads })
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

module.exports = { createLoad, getLoads }

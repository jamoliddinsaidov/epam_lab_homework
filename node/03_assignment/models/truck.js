const mongoose = require('mongoose')
const Joi = require('joi')

const truckSchema = new mongoose.Schema({
	created_by: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true,
	},
	assigned_to: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
	},
	type: {
		type: String,
		enum: {
			values: ['SPRINTER', 'SMALL STRAIGHT', 'LARGE STRAIGHT'],
			message: '{VALUE} is not supported',
		},
		required: [true, 'Please provide a type of the truck'],
	},
	status: {
		type: String,
		enum: {
			values: ['OL', 'IS'],
			message: '{VALUE} is not supported',
		},
		default: 'IS',
	},
	created_date: {
		type: Date,
		default: Date.now(),
	},
})

const Truck = mongoose.model('Truck', truckSchema)

const validateTruck = (truck) => {
	const schema = Joi.object({
		type: Joi.string().valid('SPRINTER', 'SMALL STRAIGHT', 'LARGE STRAIGHT'),
	})

	return schema.validate(truck)
}

module.exports = { Truck, validateTruck }

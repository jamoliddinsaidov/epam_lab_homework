const mongoose = require('mongoose')
const Joi = require('joi')

const loadSchema = new mongoose.Schema({
	created_by: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true,
	},
	assigned_to: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		default: null,
	},
	status: {
		type: String,
		enum: {
			values: ['NEW', 'POSTED', 'ASSIGNED', 'SHIPPED'],
			message: '{VALUE} is not supported.',
		},
		default: 'NEW',
	},
	state: {
		type: String,
		enum: {
			values: [
				'Load is waiting to be assigned...',
				'En route to Pick Up',
				'Arrived to Pick Up',
				'En route to delivery',
				'Arrived to delivery',
			],
			message: '{VALUE} is not supported',
		},
		default: 'Load is waiting to be assigned...',
	},
	name: {
		type: String,
		required: [true, 'Please provide a name'],
	},
	payload: {
		type: Number,
		required: [true, 'Please provide a payload'],
	},
	pickup_address: {
		type: String,
		required: [true, 'Please provide a pickup address'],
	},
	delivery_address: {
		type: String,
		required: [true, 'Please provide a pickup address'],
	},
	dimensions: {
		width: {
			type: Number,
			required: [true, 'Please provide a width of the load.'],
		},
		length: {
			type: Number,
			required: [true, 'Please provide a length of the load.'],
		},
		height: {
			type: Number,
			required: [true, 'Please provide a height of the load.'],
		},
	},
	logs: {
		type: Array,
		message: String,
		time: Date,
		default: {
			message: 'Load is waiting to be assigned...',
			time: Date.now(),
		},
	},
	created_date: {
		type: Date,
		default: Date.now(),
	},
})

const Load = mongoose.model('Load', loadSchema)

const validateLoad = (load) => {
	const schema = Joi.object({
		name: Joi.string().min(2).required(),
		payload: Joi.number().required(),
		pickup_address: Joi.string().min(2).required(),
		delivery_address: Joi.string().min(2).required(),
		dimensions: Joi.object({
			width: Joi.number().required(),
			length: Joi.number().required(),
			height: Joi.number().required(),
		}),
	})

	return schema.validate(load)
}

module.exports = { Load, validateLoad }

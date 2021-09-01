const mongoose = require('mongoose')
const Joi = require('joi')

const userSchema = new mongoose.Schema({
	email: {
		type: String,
		required: [true, 'Please provide an email'],
		unique: true,
		trim: true,
	},
	password: {
		type: String,
		required: [true, 'Please provide a password'],
	},
	role: {
		type: String,
		enum: {
			values: ['DRIVER', 'SHIPPER'],
			message: '{VALUE} is not supported',
		},
		required: [true, 'Please provide a role'],
	},
	created_date: {
		type: Date,
		default: Date.now(),
	},
})

const User = mongoose.model('User', userSchema)

const validateUser = (user) => {
	const schema = Joi.object({
		email: Joi.string().min(3).required().email(),
		password: Joi.string().min(4).max(20).allow('').allow(null).required(),
		role: Joi.string().valid('DRIVER', 'SHIPPER'),
	})

	return schema.validate(user)
}

module.exports = { User, validateUser }

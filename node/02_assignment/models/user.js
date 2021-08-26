const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
	username: {
		type: String,
		required: [true, 'Please provide a username'],
		unique: true,
	},
	password: {
		type: String,
		required: [true, 'Please provide a password'],
	},
	createdDate: {
		type: Date,
		default: Date.now(),
	},
})

module.exportst = mongoose.model('User', UserSchema)

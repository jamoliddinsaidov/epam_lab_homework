const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
	userId: {
		type: String,
		required: true,
	},
	completed: {
		type: Boolean,
		default: false,
	},
	text: {
		type: String,
		required: true,
	},
	createdDate: {
		type: Date,
		default: Date.now(),
	},
})

module.exports = noteSchema

const User = require('../models/user')
const { BadRequestError } = require('../errors')

const createNote = async (req, res) => {
	const { _id } = req.user

	if (Object.keys(req.body).length === 0) throw new BadRequestError('Please provide a valid note')

	const { text } = req.body

	// add note to user's notelist
	const user = await User.findOne({ _id })
	const { notes } = user
	notes.push({ userId: _id, text })
	await User.findOneAndUpdate({ _id }, { notes })

	res.status(200).json({ message: 'Success' })
}

module.exports = { createNote }

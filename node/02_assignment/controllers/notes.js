const User = require('../models/user')
const { BadRequestError, NotFoundError } = require('../errors')

const getNotes = async (req, res) => {
	const { _id } = req.user

	// getting how much skip and limit
	const offset = Number(req.query.offset) || 0
	const limit = Number(req.query.limit) || 10

	// extracting requested notes
	const user = User.find({ _id })
	const response = user.select('notes -_id')
	const [{ notes }] = await response
	const limitedNotes = notes.slice(offset, limit)

	res.status(200).json({ offset, limit, count: limitedNotes.length, notes: limitedNotes })
}

const createNote = async (req, res) => {
	const { _id } = req.user

	// validating user's input
	if (Object.keys(req.body).length === 0) throw new BadRequestError('Please provide a valid note')
	const { text } = req.body

	// add note to user's notelist
	const user = await User.findOne({ _id })
	const { notes } = user
	notes.push({ userId: _id, text })
	await User.findOneAndUpdate({ _id }, { notes })

	res.status(200).json({ message: 'Success' })
}

const getNoteById = async (req, res) => {
	const { _id } = req.user
	const noteId = req.params.id

	// getting notes
	const user = await User.findOne({ _id })
	const { notes } = user
	let note = notes.filter((n) => JSON.stringify(n._id) === JSON.stringify(noteId))[0]

	// check if required note exists
	if (!note) throw new NotFound('The note you are looking for does not exist')

	res.status(200).json({ note })
}

module.exports = { getNotes, createNote, getNoteById }

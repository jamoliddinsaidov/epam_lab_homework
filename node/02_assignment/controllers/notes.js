const User = require('../models/user')
const { BadRequestError, NotFoundError } = require('../errors')
const getNoteById = require('../utils/getNoteById')

const getNotes = async (req, res) => {
	const { _id } = req.user

	// getting how much skip and limit
	const offset = Number(req.query.offset) || 0
	const limit = Number(req.query.limit) || 10

	// extracting requested notes
	const user = await User.findOne({ _id })
	const { notes } = user
	const limitedNotes = notes.slice(offset, limit)

	res.status(200).json({ offset, limit, count: limitedNotes.length, notes: limitedNotes })
}

const createNote = async (req, res) => {
	const { _id } = req.user

	// validating user's input
	if (Object.keys(req.body).length === 0) throw new BadRequestError('Please provide a valid note')
	const { text } = req.body

	if (text.trim().length === 0) throw new BadRequestError('Note should be at least one letter')

	// add note to user's notelist
	const user = await User.findOne({ _id })
	const { notes } = user
	notes.push({ userId: _id, text })
	await User.findOneAndUpdate({ _id }, { notes })

	res.status(200).json({ message: 'Success! Note has been created.' })
}

const getNote = async (req, res) => {
	const { _id } = req.user
	const noteId = req.params.id

	// getting the required note
	let [notes, note, index] = await getNoteById(_id, noteId)

	// check if note exists
	if (!note) throw new NotFound('The note you are looking for does not exist')

	res.status(200).json({ note })
}

const editNote = async (req, res) => {
	const { _id } = req.user
	const noteId = req.params.id

	if (Object.keys(req.body).length === 0) throw new BadRequestError('Please provide a valid note')
	const { text } = req.body

	// getting the required note
	let [notes, note, index] = await getNoteById(_id, noteId)

	// check if note exists
	if (!note) throw new NotFound('The note you are looking for does not exist')

	// edit note
	note.text = text
	notes[index] = note
	await User.findOneAndUpdate({ _id }, { notes })

	res.status(200).json({ message: 'Success! Note has been edited.' })
}

const updateNote = async (req, res) => {
	const { _id } = req.user
	const noteId = req.params.id

	// getting the required note
	let [notes, note, index] = await getNoteById(_id, noteId)

	// check if note exists
	if (!note) throw new NotFound('The note you are looking for does not exist')

	// update the note
	note.completed = !note.completed
	notes[index] = note
	await User.findOneAndUpdate({ _id }, { notes })

	res.status(200).json({ message: 'Success! The note has been updated.' })
}

const deleteNote = async (req, res) => {
	const { _id } = req.user
	const noteId = req.params.id

	// getting the required note
	let [notes, note, index] = await getNoteById(_id, noteId)

	// check if note exists
	if (!note) throw new NotFound('The note you are looking for does not exist')

	// delete the note
	notes.splice(index, 1)
	await User.findOneAndUpdate({ _id }, { notes })

	res.status(200).json({ message: 'Success! The note has been deleted.' })
}

module.exports = { getNotes, createNote, getNote, editNote, updateNote, deleteNote }

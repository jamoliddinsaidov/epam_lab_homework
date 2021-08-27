const express = require('express')
const router = express.Router()
const { createNote, getNotes, getNoteById, editNoteById } = require('../controllers/notes')
const authMiddleware = require('../middlewares/auth_handler')

router.route('/').get(authMiddleware, getNotes).post(authMiddleware, createNote)
router.route('/:id').get(authMiddleware, getNoteById).put(authMiddleware, editNoteById)

module.exports = router

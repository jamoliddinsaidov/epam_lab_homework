const express = require('express')
const router = express.Router()
const { createNote, getNotes, getNote, editNote, updateNote } = require('../controllers/notes')
const authMiddleware = require('../middlewares/auth_handler')

router.route('/').get(authMiddleware, getNotes).post(authMiddleware, createNote)
router.route('/:id').get(authMiddleware, getNote).put(authMiddleware, editNote).patch(authMiddleware, updateNote)

module.exports = router

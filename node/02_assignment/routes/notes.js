const express = require('express')
const router = express.Router()
const { createNote, getNotes, getNote, editNote, updateNote, deleteNote } = require('../controllers/notes')
const authMiddleware = require('../middlewares/auth_handler')

router.use(authMiddleware)

router.route('/').get(getNotes).post(createNote)
router.route('/:id').get(getNote).put(editNote).patch(updateNote).delete(deleteNote)

module.exports = router

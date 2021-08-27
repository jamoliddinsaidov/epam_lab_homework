const express = require('express')
const router = express.Router()
const { createNote, getNotes } = require('../controllers/notes')
const authMiddleware = require('../middlewares/auth_handler')

router.route('/').get(authMiddleware, getNotes).post(authMiddleware, createNote)

module.exports = router

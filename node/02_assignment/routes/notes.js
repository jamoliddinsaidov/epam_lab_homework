const express = require('express')
const router = express.Router()
const { createNote } = require('../controllers/notes')
const authMiddleware = require('../middlewares/auth_handler')

router.route('/').post(authMiddleware, createNote)

module.exports = router

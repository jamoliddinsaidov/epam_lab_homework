const express = require('express')
const router = express.Router()
const { getUser } = require('../controllers/user')
const authMiddleware = require('../middlewares/auth_handler')

router.route('/').get(authMiddleware, getUser)

module.exports = router

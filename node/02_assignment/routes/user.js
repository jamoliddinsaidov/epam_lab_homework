const express = require('express')
const router = express.Router()
const { getUser, deleteUser } = require('../controllers/user')
const authMiddleware = require('../middlewares/auth_handler')

router.route('/').get(authMiddleware, getUser).delete(authMiddleware, deleteUser)

module.exports = router

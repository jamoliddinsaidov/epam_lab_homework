const express = require('express')
const router = express.Router()
const { getUser, deleteUser, updatePassword } = require('../controllers/user')
const authMiddleware = require('../middlewares/auth_handler')

router.route('/').get(authMiddleware, getUser).delete(authMiddleware, deleteUser).patch(authMiddleware, updatePassword)

module.exports = router

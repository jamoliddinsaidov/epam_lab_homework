const express = require('express')
const router = express.Router()
const { getUser, deleteUser, updatePassword } = require('../controllers/user')
const authMiddleware = require('../middlewares/auth_handler')

router.use(authMiddleware)

router.route('/').get(getUser).delete(deleteUser).patch(updatePassword)

module.exports = router

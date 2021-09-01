const express = require('express')
const router = express.Router()
const { getUser, changePassword } = require('../controllers/user')
const authMiddleware = require('../middlewares/auth_handler')

router.use(authMiddleware)

router.route('/').get(getUser)
router.route('/password').patch(changePassword)

module.exports = router

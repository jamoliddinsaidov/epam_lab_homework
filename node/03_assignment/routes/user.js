const express = require('express')
const router = express.Router()
const { getUser } = require('../controllers/user')
const authMiddleware = require('../middlewares/auth_handler')

router.use(authMiddleware)

router.route('/').get(getUser)

module.exports = router

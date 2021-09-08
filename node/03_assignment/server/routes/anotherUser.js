const express = require('express')
const router = express.Router()
const authMiddleware = require('../middlewares/auth_handler')
const { getUserEmail } = require('../controllers/anotherUser')

router.use(authMiddleware)

router.route('/email/:id').get(getUserEmail)

module.exports = router

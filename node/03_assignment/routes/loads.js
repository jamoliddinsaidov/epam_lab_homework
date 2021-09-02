const express = require('express')
const router = express.Router()
const authMiddleware = require('../middlewares/auth_handler')
const { createLoad } = require('../controllers/loads')

router.use(authMiddleware)

router.route('/').post(createLoad)

module.exports = router

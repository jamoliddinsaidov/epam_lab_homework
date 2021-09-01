const express = require('express')
const router = express.Router()
const { createTruck } = require('../controllers/trucks')
const authMiddleware = require('../middlewares/auth_handler')

router.use(authMiddleware)

router.route('/').post(createTruck)

module.exports = router

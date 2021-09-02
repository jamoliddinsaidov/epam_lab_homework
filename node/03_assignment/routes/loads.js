const express = require('express')
const router = express.Router()
const authMiddleware = require('../middlewares/auth_handler')
const { getLoads, createLoad } = require('../controllers/loads')

router.use(authMiddleware)

router.route('/').get(getLoads).post(createLoad)

module.exports = router

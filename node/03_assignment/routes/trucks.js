const express = require('express')
const router = express.Router()
const { createTruck, getTrucks, getTruckById, updateTruck, deleteTruck } = require('../controllers/trucks')
const authMiddleware = require('../middlewares/auth_handler')

router.use(authMiddleware)

router.route('/').post(createTruck).get(getTrucks)
router.route('/:id').get(getTruckById).put(updateTruck).delete(deleteTruck)

module.exports = router

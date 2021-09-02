const express = require('express')
const router = express.Router()
const authMiddleware = require('../middlewares/auth_handler')
const { getLoads, createLoad, getLoadById, deleteLoadById } = require('../controllers/loads')

router.use(authMiddleware)

router.route('/').get(getLoads).post(createLoad)
router.route('/:id').get(getLoadById).delete(deleteLoadById)

module.exports = router

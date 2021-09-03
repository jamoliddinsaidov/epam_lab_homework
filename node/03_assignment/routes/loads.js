const express = require('express')
const router = express.Router()
const authMiddleware = require('../middlewares/auth_handler')
const {
	getLoads,
	createLoad,
	getActiveLoadForDriver,
	changeLoadState,
	getLoadById,
	updateLoadById,
	deleteLoadById,
	postLoadById,
	getShippingInfo,
} = require('../controllers/loads')

router.use(authMiddleware)

router.route('/').get(getLoads).post(createLoad)
router.route('/active').get(getActiveLoadForDriver)
router.route('/active/state').patch(changeLoadState)
router.route('/:id').get(getLoadById).put(updateLoadById).delete(deleteLoadById)
router.route('/:id/post').post(postLoadById)
router.route('/:id/shipping_info').get(getShippingInfo)

module.exports = router

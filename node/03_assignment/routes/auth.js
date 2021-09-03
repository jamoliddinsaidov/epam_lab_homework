const express = require('express')
const router = express.Router()
const { register, login, forgotPassword } = require('../controllers/auth')

router.route('/register').post(register)
router.route('/login').post(login)
router.route('/forgot_password').post(forgotPassword)

module.exports = router

const express = require('express')
const router = express.Router()

router.route('/register').get((req, res) => {
	res.send('register')
})

router.route('/login').get((req, res) => {
	res.send('login')
})

module.exports = router

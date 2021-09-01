const User = require('../models/user')
const { BadRequest } = require('../errors')
const bcrypt = require('bcrypt')

const getUser = async (req, res) => {
	// const { _id, email, role, created_date } = req.user
	res.status(200).json({ user: req.user })
}

module.exports = { getUser }

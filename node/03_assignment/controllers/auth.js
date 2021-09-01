const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const { User, validateUser } = require('../models/user')
const { BadRequestError, BadRequest } = require('../errors')

const register = async (req, res) => {
	const { error } = validateUser(req.body)
	if (error) throw new BadRequest(error.details[0].message)

	const { email, role, password } = req.body
	const user = new User({
		email,
		role,
		password: await bcrypt.hash(password, 10),
	})
	await user.save()

	res.status(200).json({ message: 'Success! Your account has been created.' })
}

module.exports = { register }

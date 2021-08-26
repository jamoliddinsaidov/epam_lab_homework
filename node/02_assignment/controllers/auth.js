const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../models/user')

const register = async (req, res) => {
	const { username, password } = req.body

	// check if credentials are provided
	if (!username || !password) return res.status(400).json({ message: 'Please provide username and password' })

	const user = new User({
		username,
		password: await bcrypt.hash(password, 10),
	})

	await user.save()
	res.status(200).json({ message: 'Success' })
}

const login = async (req, res) => {
	const { username, password } = req.body

	// check if credentials are provided
	if (!username || !password) return res.status(400).json({ message: 'Please provide username and password' })

	const user = await User.findOne({ username })

	// check if user exists and password matches
	if (!user) return res.status(400).json({ message: 'Wrong username or password' })
	if (!(await bcrypt.compare(password, user.password))) return res.status(400).json({ message: 'Wrong username or password' })

	const jwt_token = jwt.sign(
		{
			_id: user._id,
			username: user.username,
		},
		process.env.SECRET_KEY
	)

	res.status(200).json({ message: 'Succes', jwt_token })
}

module.exports = { register, login }

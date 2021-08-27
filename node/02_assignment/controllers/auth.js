const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../models/user')
const { BadRequestError } = require('../errors')

const register = async (req, res) => {
	if (Object.keys(req.body).length === 0) throw new BadRequestError('Please provide credentials')

	const { username, password } = req.body

	// check if credentials are provided
	if (!username || !password) throw new BadRequestError('Please provide username and password')

	const user = new User({
		username,
		password: await bcrypt.hash(password, 10),
	})

	await user.save()
	res.status(200).json({ message: 'Success! Your account has been created.' })
}

const login = async (req, res) => {
	if (Object.keys(req.body).length === 0) throw new BadRequestError('Please provide credentials')

	const { username, password } = req.body

	// check if credentials are provided
	if (!username || !password) throw new BadRequestError('Please provide username and password')
	const user = await User.findOne({ username })

	// check if user exists and password is correct
	if (!user) throw new BadRequestError('Wrong username or password')
	if (!(await bcrypt.compare(password, user.password))) throw new BadRequestError('Wrong username or password')

	const jwt_token = jwt.sign(
		{
			_id: user._id,
			username: user.username,
			createdDate: user.createdDate,
			password: user.password,
		},
		process.env.SECRET_KEY
	)

	res.status(200).json({ message: 'Succes', jwt_token })
}

module.exports = { register, login }

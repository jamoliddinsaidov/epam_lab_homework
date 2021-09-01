const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const { User, validateUser, validateLogin } = require('../models/user')
const { BadRequest } = require('../errors')

const register = async (req, res) => {
	const { error } = validateUser(req.body)
	if (error) throw new BadRequest(error.details[0].message)

	// get credentials
	const { email, role, password } = req.body
	const user = new User({
		email,
		role,
		password: await bcrypt.hash(password, 10),
	})
	await user.save()

	res.status(200).json({ message: 'Success! Your account has been created.' })
}

const login = async (req, res) => {
	const { error } = validateLogin(req.body)
	if (error) throw new BadRequest(error.details[0].message)

	// get credentials
	const { email, password } = req.body
	const user = await User.findOne({ email })

	// check if user exists and password is correct
	if (!user) throw new BadRequest('Wrong username or password')
	if (!(await bcrypt.compare(password, user.password))) throw new BadRequest('Wrong username or password')

	const jwt_token = jwt.sign(
		{
			_id: user._id,
			email: user.email,
			role: user.role,
			created_date: user.created_date,
		},
		process.env.SECRET_KEY
	)

	res.status(200).json({ jwt_token })
}

module.exports = { register, login }

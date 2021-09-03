const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const { User, validateUser, validateLogin, validateEmail } = require('../models/user')
const { BadRequest } = require('../errors')
const nodemailer = require('nodemailer')
const ProtonMail = require('protonmail-api')

const register = async (req, res) => {
	//valiadte user input
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
	//valiadte user input
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

const forgotPassword = async (req, res) => {
	//valiadte user input
	const { error } = validateEmail(req.body)
	if (error) throw new BadRequest(error.details[0].message)

	// validate user
	const { email } = req.body
	const user = await User.findOne({ email })
	if (!user) throw new BadRequest(`User with email ${email} doesn't exist. Please, try again.`)

	// generate new password and send email
	const newPassword = Math.random().toString().slice(3, 9)
	const pm = await ProtonMail.connect({
		username: 'speedytruckassignment@protonmail.com',
		password: 'Tw#:?,ks7C4V/*)',
	})

	await pm.sendEmail({
		to: email,
		subject: 'Forgot Password of Profile',
		body: `<h2>Hello!</h2> <p>Your new password is <strong>${newPassword} </strong> <br>We recommend to change it ASAP!</p>`,
	})
	pm.close()

	await User.findOneAndUpdate({ email }, { password: await bcrypt.hash(newPassword, 10) })
	res.status(200).json({ message: 'New password is sent to your email address' })
}

module.exports = { register, login, forgotPassword }

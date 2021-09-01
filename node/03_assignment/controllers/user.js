const { User, validatePassword } = require('../models/user')
const { BadRequest } = require('../errors')
const bcrypt = require('bcrypt')

const getUser = async (req, res) => {
	res.status(200).json({ user: req.user })
}

const changePassword = async (req, res) => {
	const { error } = validatePassword(req.body)
	if (error) throw new BadRequest(error.details[0].message)

	const { _id } = req.user
	const user = await User.findOne({ _id })

	const { oldPassword, newPassword } = req.body
	// compare passwords
	if ((await bcrypt.compare(oldPassword, user.password)) && !(await bcrypt.compare(newPassword, user.password))) {
		// update user's password
		await User.findOneAndUpdate({ _id }, { password: await bcrypt.hash(newPassword, 10) })
	} else {
		throw new BadRequest('Please provide a valid password')
	}

	res.status(200).json({ message: 'Success! Password has been changed.' })
}

const deleteUser = async (req, res) => {
	await User.findByIdAndRemove({ _id: req.user._id })
	res.status(200).json({ message: 'Success! User has been deleted.' })
}

module.exports = { getUser, changePassword, deleteUser }

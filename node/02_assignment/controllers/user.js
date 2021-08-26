const User = require('../models/user')
const { BadRequest } = require('../errors')
const bcrypt = require('bcrypt')

const getUser = (req, res) => {
	res.status(200).json({ user: req.user })
}

const deleteUser = async (req, res) => {
	await User.findOneAndRemove({ _id: req.user._id })
	res.status(200).json({ message: 'Success' })
}

const updatePassword = async (req, res) => {
	const { _id, password } = req.user
	const { oldPassword, newPassword } = req.body

	// comparing old and current passwords
	if ((await bcrypt.compare(oldPassword, password)) && !(await bcrypt.compare(newPassword, password))) {
		// updating the password
		await User.findOneAndUpdate(
			{ _id },
			{ password: await bcrypt.hash(newPassword, 10) },
			{
				new: true,
			}
		)
	} else {
		throw new BadRequest('Please provide a valid password')
	}

	res.status(200).json({ message: 'Success' })
}

module.exports = { getUser, deleteUser, updatePassword }

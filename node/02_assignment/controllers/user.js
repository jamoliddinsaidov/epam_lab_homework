const User = require('../models/user')
const { BadRequest } = require('../errors')
const bcrypt = require('bcrypt')

const getUser = (req, res) => {
	const { _id, username, createdDate } = req.user
	res.status(200).json({ user: { _id, username, createdDate } })
}

const deleteUser = async (req, res) => {
	await User.findOneAndRemove({ _id: req.user._id })
	res.status(200).json({ message: 'Success' })
}

const updatePassword = async (req, res) => {
	const { _id, password } = req.user

	if (Object.keys(req.body).length === 0) throw new BadRequestError('Please provide a valid password')

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

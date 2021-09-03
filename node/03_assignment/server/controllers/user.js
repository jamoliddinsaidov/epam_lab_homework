const { User, validatePassword } = require('../models/user')
const { BadRequest } = require('../errors')
const bcrypt = require('bcrypt')
const { Truck } = require('../models/truck')

const getUser = async (req, res) => {
	res.status(200).json({ user: req.user })
}

const changePassword = async (req, res) => {
	// validate user input
	const { error } = validatePassword(req.body)
	if (error) throw new BadRequest(error.details[0].message)

	const { _id, role } = req.user
	const user = await User.findOne({ _id })

	// check if driver has assigned truck
	if (role === 'DRIVER') {
		const truck = await Truck.findOne({ assigned_to: _id, status: 'OL' })
		if (truck) throw new BadRequest('You cannot change your password while you have On Loaded Truck.')
	}

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
	const { _id, role } = req.user

	// check if driver has assigned truck
	if (role === 'DRIVER') {
		const truck = await Truck.findOne({ assigned_to: _id, status: 'OL' })
		if (truck) throw new BadRequest('You cannot delete your profile while you have On Loaded Truck.')
	}

	await User.findByIdAndRemove({ _id: req.user._id })
	res.status(200).json({ message: 'Success! User has been deleted.' })
}

module.exports = { getUser, changePassword, deleteUser }

const User = require('../models/user')

const getUser = (req, res) => {
	res.status(200).json({ user: req.user })
}

const deleteUser = async (req, res) => {
	await User.findOneAndRemove({ _id: req.user._id })
	res.status(200).json({ message: 'Success' })
}

module.exports = { getUser, deleteUser }

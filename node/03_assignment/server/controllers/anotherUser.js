const { User } = require('../models/user')
const { BadRequest } = require('../errors')

const getUserEmail = async (req, res) => {
  const { id } = req.params

  if (id === '0') {
    return res.status(200).json({ userEmail: null })
  }

  const user = await User.findOne({ _id: id })
  res.status(200).json({ userEmail: user.email })
}

module.exports = { getUserEmail }

const jwt = require('jsonwebtoken')
const { Unauthorized } = require('../errors')

const authMiddleware = async (req, res, next) => {
  // checking if valid headers are provided
  if (!req.headers['authorization']) throw new Unauthorized('No token provided')

  // extracting token
  const [, token] = req.headers['authorization'].split(' ')

  if (!token) throw new Unauthorized('Please provide a token')

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY)
    const { _id, role, email, created_date } = decoded
    req.user = { _id, role, email, created_date }
    next()
  } catch (error) {
    throw new Unauthorized('Not authorized to access to this route')
  }
}

module.exports = authMiddleware

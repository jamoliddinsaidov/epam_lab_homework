const { StatusCodes } = require('http-status-codes')

const notFoundMiddleware = (req, res) =>
  res.status(StatusCodes.NOT_FOUND).json({ message: 'This route does not exist.' })

module.exports = notFoundMiddleware

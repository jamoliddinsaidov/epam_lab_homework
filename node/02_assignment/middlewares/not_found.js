const { StatusCodes } = require('http-status-codes')

const notFoundMiddleware = (req, res) => res.status(StatusCodes.NOT_FOUND).json({ message: 'Route does not exists' })

module.exports = notFoundMiddleware

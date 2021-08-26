const { CustomErrorAPI } = require('../errors')
const { StatusCodes } = require('http-status-codes')

const errorHandlerMiddleware = (err, req, res, next) => {
	if (err instanceof CustomErrorAPI) {
		return res.status(err.statusCode).json({ message: err.message })
	}

	return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Something went wrong, please try again later.' })
}

module.exports = errorHandlerMiddleware

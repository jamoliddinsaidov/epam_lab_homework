const CustomErrorAPI = require('./custom_error')
const { StatusCodes } = require('http-status-codes')

class Unauthorized extends CustomErrorAPI {
	constructor(message) {
		super(message)
		this.statusCode = StatusCodes.UNAUTHORIZED
	}
}

module.exports = Unauthorized

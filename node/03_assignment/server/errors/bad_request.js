const CustomErrorAPI = require('./custom_error')
const { StatusCodes } = require('http-status-codes')

class BadRequest extends CustomErrorAPI {
  constructor(message) {
    super(message)
    this.statusCode = StatusCodes.BAD_REQUEST
  }
}

module.exports = BadRequest

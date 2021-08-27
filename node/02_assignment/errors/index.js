const CustomErrorAPI = require('./custom_error')
const BadRequest = require('./bad_request')
const Unauthorized = require('./unauthorized')
const NotFoundError = require('./not_found')

module.exports = {
	CustomErrorAPI,
	BadRequest,
	Unauthorized,
	NotFoundError,
}

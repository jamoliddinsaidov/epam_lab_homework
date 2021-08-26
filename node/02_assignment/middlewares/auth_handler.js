const jwt = require('jsonwebtoken')
const { Unauthorized } = require('../errors')

const authMiddleware = async (req, res, next) => {
	const headers = req.headers.authorization
	let token

	// checking if valid headers are provided
	if (!headers) throw new Unauthorized('No token provided')

	// extracting token
	if (headers.startsWith('Bearer ')) token = headers.split(' ')[1]
	else token = headers

	// decoding user info and attaching them to req
	try {
		const decoded = jwt.decode(token, process.env.SECRET_KEY)
		const { _id, username, createdDate, password } = decoded
		req.user = { _id, username, createdDate, password }
		next()
	} catch (error) {
		throw new UnauthenticatedError('Not authorized to access to this route')
	}
}

module.exports = authMiddleware

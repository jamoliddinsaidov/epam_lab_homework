const jwt = require('jsonwebtoken')
const { Unauthorized } = require('../errors')

const authMiddleware = async (req, res, next) => {
	const headers = req.headers.authorization
	let token

	if (!headers) throw new Unauthorized('No token provided')

	if (headers.startsWith('Bearer ')) token = headers.split(' ')[1]
	else token = headers

	try {
		const decoded = jwt.decode(token, process.env.SECRET_KEY)
		const { _id, username, createdDate } = decoded
		req.user = { _id, username, createdDate }
		next()
	} catch (error) {
		throw new UnauthenticatedError('Not authorized to access to this route')
	}
}

module.exports = authMiddleware

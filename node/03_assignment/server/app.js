require('dotenv').config()
require('express-async-errors')

const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const connectDB = require('./utils/connectDB')
const { errorHandlerMiddleware, notFoundMiddleware } = require('./middlewares')
const app = express()

// set up middlewares
app.use(morgan('tiny'))
app.use(express.json())
app.use(cors({ origin: '*' }))

// routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/users/me', require('./routes/user'))
app.use('/api/trucks', require('./routes/trucks'))
app.use('/api/loads', require('./routes/loads'))
app.use('/api/service/users/', require('./routes/anotherUser'))

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 8080
const mongoURI = process.env.MONGO_URI
const start = async () => {
	try {
		await connectDB(mongoURI)
		app.listen(port, console.log(`MongoDB connected. \nServer started on port ${port}...`))
	} catch (error) {
		console.log(error)
	}
}

start()

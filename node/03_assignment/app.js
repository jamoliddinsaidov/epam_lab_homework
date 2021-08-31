require('dotenv').config()
require('express-async-errors')

const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const connectDB = require('./utils/connectDB')
const app = express()

// set up middlewares
app.use(morgan('tiny'))
app.use(express.json())
app.use(cors({ origin: '*' }))

// routes
app.get('/', (req, res) => {
	res.send('hello')
})

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

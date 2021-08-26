require('dotenv').config()
require('express-async-errors')

const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const connectDB = require('./db/connect')
const app = express()

// middlewares
app.use(morgan('tiny'))
app.use(express.json())
app.use(cors({ origin: '*' }))
app.use(express.json())

// routes
app.get('/', (req, res) => {
	res.status(200).json({ mgs: 'success' })
})

const port = process.env.PORT || 8080
const start = async () => {
	try {
		await connectDB(process.env.MONGO_URI)
		app.listen(port, console.log(`server started on port ${port}...`))
	} catch (error) {
		console.log(error)
	}
}

start()

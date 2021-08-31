require('dotenv').config()
require('express-async-errors')

const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
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
app.listen(port, (err) => {
	if (err) console.log(err)

	console.log(`Server started on port ${port}`)
})

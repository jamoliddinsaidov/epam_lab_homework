const express = require('express')
const morgan = require('morgan')
const app = express()

// setup middlewares
app.use(morgan('tiny'))
app.use(express.json())

// routes
app.use('/api/files', require('./routes/files'))

app.listen(8080, (error) => {
	if (error) console.log(error)

	console.log('Server is running on port 8080...')
})

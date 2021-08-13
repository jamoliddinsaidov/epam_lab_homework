const express = require('express')
const app = express()

app.get('/', (req, res) => {
	res.json({ msg: 'hello' })
})

app.listen(8080, (error) => {
	if (error) console.log(error)

	console.log('Server is running on port 8080...')
})

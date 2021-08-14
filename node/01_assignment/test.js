const { writeFile } = require('fs').promises
const app = require('express')()

app.get('/', async (req, res) => {
	try {
		await writeFile('../files/text.txt', 'hielolo')
		res.send(created)
	} catch (error) {
		res.send(error)
	}
})

app.listen(3000)

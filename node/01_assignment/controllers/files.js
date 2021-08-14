const { writeFile } = require('fs').promises
const path = require('path')
const absolutePath = path.resolve('./files')
const supportedExtensions = ['log', 'txt', 'json', 'yaml', 'xml', 'js']

const createFile = (req, res) => {
	try {
		const { filename, content } = req.body

		// checking if filename and content parameters are provided
		if (filename === undefined) {
			res.status(400).json({ message: "Please specify 'filename' parameter" })
			return
		}

		if (content === undefined) {
			res.status(400).json({ message: "Please specify 'content' parameter" })
			return
		}

		// extractiong extention of the file
		const filenameArr = filename.split('.')
		const extension = filenameArr[filenameArr.length - 1]

		// check if the extension is valid
		if (supportedExtensions.includes(extension)) {
			writeFile(`${absolutePath}/${filename}`, content)

			res.status(200).json({ message: 'File created successfully' })
			return
		} else {
			res.status(400).json({
				message: `File extention should be one of the followings: ${supportedExtensions.map((ext) => ext)}`,
			})
		}
	} catch (error) {
		res.status(500).json({ message: 'Server error' })
	}
}

module.exports = { createFile }

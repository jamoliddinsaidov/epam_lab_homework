const { writeFile, readdir, readFile, stat } = require('fs')
const path = require('path')
const filesFolder = path.resolve('./files')

// utils
const { getFileExtension } = require('../utils/getFileExtension')
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
		const extension = getFileExtension(filename)

		// check if the extension is valid
		if (supportedExtensions.includes(extension)) {
			writeFile(`${filesFolder}/${filename}`, content, (err) => {
				if (err) throw err
			})

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

const getFiles = (req, res) => {
	try {
		let files = []

		readdir(filesFolder, (err, result) => {
			if (err) {
				res.status(500).json({ message: 'Server error' })
				return
			}

			result.forEach((file) => {
				files.push(file)
			})

			res.status(200).json({ message: 'Success', files })
		})
	} catch (error) {
		res.status(400).json({ message: 'Client error' })
	}
}

const getFile = (req, res) => {
	try {
		const { filename } = req.params
		const extension = getFileExtension(filename)

		stat(`${filesFolder}\\${filename}`, (err, stats) => {
			if (err) {
				res.status(400).json({ message: `No file with '${filename}' filename found` })
				return
			}

			let uploadedDate = stats.birthtime

			readFile(`${filesFolder}\\${filename}`, 'utf8', (err, content) => {
				if (err) {
					res.status(500).json({ message: 'Server error' })
					return
				}

				res.json({
					message: 'Success',
					filename,
					content,
					extension,
					uploadedDate,
				})
			})
		})
	} catch (error) {
		res.status(500).json({ message: 'Server error' })
	}
}

module.exports = { createFile, getFiles, getFile }

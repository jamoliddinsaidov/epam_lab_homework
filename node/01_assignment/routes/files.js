const express = require('express')
const router = express.Router()
const { createFile, getFiles, getFile, deleteFile, updateFile } = require('../controllers/files.js')

router.route('/').post(createFile).get(getFiles)
router.route('/:filename').get(getFile).delete(deleteFile).patch(updateFile)

module.exports = router

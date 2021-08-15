const express = require('express')
const router = express.Router()
const { createFile, getFiles, getFile, deleteFile } = require('../controllers/files.js')

router.route('/').post(createFile).get(getFiles)
router.route('/:filename').get(getFile).delete(deleteFile)

module.exports = router

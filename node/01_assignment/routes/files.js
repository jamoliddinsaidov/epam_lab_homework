const express = require('express')
const router = express.Router()
const { createFile, getFiles, getFile } = require('../controllers/files.js')

router.post('/', createFile)
router.get('/', getFiles)
router.get('/:filename', getFile)

module.exports = router

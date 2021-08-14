const express = require('express')
const router = express.Router()
const { createFile, getFiles } = require('../controllers/files.js')

router.post('/', createFile)
router.get('/', getFiles)

module.exports = router

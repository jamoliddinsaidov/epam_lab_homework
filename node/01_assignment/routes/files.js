const express = require('express')
const router = express.Router()
const { createFile } = require('../controllers/files.js')

router.post('/', createFile)

module.exports = router

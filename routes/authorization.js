const express = require('express')
const router = express.Router()
const queries = require('../db/queries')

router.get('/', (request, response) => {
    response.sendStatus(200)
})

module.exports = router

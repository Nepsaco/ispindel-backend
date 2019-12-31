const express = require('express')
const router = express.Router()
const queries = require('../db/queries')

router.post('/ispindel', (request, response) => {
    console.log(request.body)
})



module.exports = router

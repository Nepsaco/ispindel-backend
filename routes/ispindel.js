const express = require('express')
const router = express.Router()
const queries = require('../db/queries')

router.get('/ispindel', (request, response) => {
    queries
        .ispindel
        .getAll()
        .then(results => {
            response.send(results)
        }).then(response.status(201))
})

router.post('/ispindel', (request, response) => {
    queries
        .ispindel
        .create(request.body)
        .then(result => {
            response.send(result)
        }).then(response.status(201))
})



module.exports = router

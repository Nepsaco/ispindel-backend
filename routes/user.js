const express = require('express')
const router = express.Router()
const queries = require('../db/queries')

router.post('/users', (request, response) => {
    queries
        .user
        .create(request.body)
        .then(users => {
            response.json(users[0])
        })
})

router.get('/login', (request, response) => {
    response.json({
        token: 'aaa'
    })
})

module.exports = router

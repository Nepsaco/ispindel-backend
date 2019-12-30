const express = require('express')
const router = express.Router()


router.post('/ispindel', (request, response) => {
    console.log(request.body)
})


module.exports = route

const express = require('express')
const router = express.Router()

router.post('/ispindel', (request, response) => {
    console.log('request', request)
    console.log('response', response)
    response.json({ message: 'hi' })
})



module.exports = router

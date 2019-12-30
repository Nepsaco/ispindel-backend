const express = require('express')
const router = express.Router()

router.post('/ispindel', (request, response) => {
    console.log(request.body)
    response.json({ message: 'hi' })
})



module.exports = router

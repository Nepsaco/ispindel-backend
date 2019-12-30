const express = require('express')
const router = express.Router()

router.post('/ispindel', (request, response) => {
    console.log(response.body)
    response.json({ message: 'hi' })
})



module.exports = router

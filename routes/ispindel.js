const express = require('express')
const router = express.Router()


router.get('/ispindel', (request, response) => {
    response.json({ message: 'hi' })
})

router.post('/ispindel', (request, response) => {
    response.json({ message: 'hi' })
})



module.exports = router

const express = require('express')
const router = express.Router()

router.post('/ispindel', (request, response) => {
    response.json(request)
})



module.exports = router

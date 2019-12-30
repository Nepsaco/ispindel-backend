const express = require('express')
const router = express.Router()

router.post('/ispindel', (request, response) => {
    console.log('body', request.body)
    console.log('params', request.params)
    console.log('combo', request.body.params)
    console.log('combo', request.params.body)
})



module.exports = router

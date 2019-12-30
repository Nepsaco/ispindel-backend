const express = require('express')
const app = express()
const port = process.env.PORT || 9000
const ispindel = require('./routes/ispindel')

app.listen(port, () => {
    console.log(`listening on port: ${port}`)
})

app.use(ispindel)

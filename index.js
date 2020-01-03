const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const bcrypt = require('bcrypt')
const ispindelRouter = require('./routes/ispindel')
const userRouter = require('./routes/user')
const authorizationRouter = require('./routes/authorization')


app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(ispindelRouter)
app.use(userRouter)
app.use(authorizationRouter)

const port = process.env.PORT || 9000

app.listen(port, () => {
    console.log(`listening on port: ${port}`)
})

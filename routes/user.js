const express = require('express')
const router = express.Router()
const users = require('../db/queries/users')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SECRET = 'DUMB'

router.get('/users', (request, response) => {
  users
    .user
    .getAll()
    .then(results => { response.send(results) })
    .then(response.status(201))
})

router.post('/users', (request, response) => {
  users
    .user
    .create(request.body)
    .then(user => {
      if (!user) {
        response.status(401).json({ error: 'Nice Try Dick' })
      } else {
        jwt.sign(user, SECRET, (error, token) => {
          if (error) throw new Error(error)
          response.status(201).json({ token })
        })
      }
    })
    .catch(err => response.status(401).json({ error: err.message }))
})

router.post('/login', (request, response) => {
  users
    .login
    .authorizeUser(request.body)
    .then(user => {
      if (!user) {
        response.status(401).json({ error: 'No User Found' })
      } else {
        return bcrypt
          .compare(request.body.password, user.password_digest)
          .then(isAuthenticated => {
            if (!isAuthenticated) {
              response.status(401).json({ error: 'Nice Try Dick' })
            } else {
              return jwt.sign(user, SECRET, (_, token) => {
                response.status(200).json({ token })
              })
            }
          })
      }
    })
})

router.get('/authorize', (request, response, next) => {
  if (!request.headers.authorization) {
    return response.status(401).json({ error: 'Git Init' })
  }
  const token = request.headers.authorization.split(' ')[1]
  jwt.verify(token, SECRET, (error, decodedToken) => {
    if (error) {
      response.status(401).json({ message: 'yeah right...' })
    } else {
      response.status(200).json({ message: 'you did right...' })
    }
  })
})

module.exports = router

const express = require('express')
const router = express.Router()
const passport = require('passport')
require('../passport/local_login')(passport)
require('../passport/jwt_login')(passport)

router.post('/login', (req, res, next) => {
  passport.authenticate('login', (err, token) => {
    err
      ? res.status(200).json({ error: err.message })
      : res.status(200).json({ token })
  })(req, res, next)
})

router.post('/jwt', (req, res, next) => {
  passport.authenticate('jwt', (err, user) => {
    err
    ? res.status(200).json({ error: err.message })
    : res.json({ user })
  })(req, res, next)
})

module.exports = router

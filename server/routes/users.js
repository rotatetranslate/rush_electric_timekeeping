const express = require('express')
const router = express.Router()
const User = require('../models/user')
const passport = require('passport')
require('../passport/admin')(passport)

const removePassword = ({ _doc: { password, hasSetCustomPassword, ...rest } = {} }) => rest

router.get('/', async (req, res, next) => {
  try {
    const users = await User.find({})
    const usersWithoutPassword = users.map(removePassword)
    res.status(200).json({ users: usersWithoutPassword })
  } catch(err) {
    res.json({ error: err })
  }
})

router.get('/:id', async (req, res, next) => {
  const { params: { id } } = req
  try {
    const user = await User.findOne({ _id: id })
    const timesheets = await user.timeSheets()
    const userWithoutPassword = removePassword(user)
    res.status(200).json({ user: userWithoutPassword, timesheets })
  } catch(err) {
    res.json({ error: err })
  }
})

// const emailNewUser =

router.post('/', async (req, res, next) => {
  console.log('req.body', req.body)
  passport.authenticate('iAdmin', async (err, res) => {
    console.log('isAdmin err?', err)
    console.log('isAdmin res?', res)
    try {
      const defaultPassword = genRandomPassword()
      const user = await User.create({ email, name })
      console.log('created user?', user)
      res.status(200).json({ user })
    } catch(err) {
      console.log('err?', err)
      res.status(400).json({ error: err })
    }
  })
  const { email, name } = req.body
})

module.exports = router

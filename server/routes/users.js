const express = require('express')
const router = express.Router()
const User = require('../models/user')
const passport = require('passport')
require('../passport/admin')(passport)
const { removePassword, genRandomPassword, mailForm } = require('../helpers')

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

const newUserEmail = (name, email, password) => ({
  to: email,
  from: 'rushelectric@att.net',
  subject: 'Rush Electric account created',
  text: `${name},\n\n` +
  'Your account has been created at http://www.rushelectric.net\n\n' +
  'Please use the following credentials to log in at http://www.rushelectric.net/login :\n\n' +
  `Username: ${email}\n\nPassword: ${password}\n\n` +
  'You will be required to create a new password on your first login.\n\n' +
  'Thank you,\n\n' +
  'Rush Electric'
})

router.post('/', (req, res, next) => {
  passport.authenticate('admin', async (err, admin) => {
    try {
      const { email, name } = req.body
      const defaultPassword = genRandomPassword()
      console.log('defaultPassword', defaultPassword)
      const user = await User.create({ email, name, password: defaultPassword })
      console.log('user', user)
      const message = newUserEmail(name, email, defaultPassword)
      const emailResponse = mailForm(message)
      res.status(200).json({ user })
    } catch(err) {
      res.status(200).json({ error: 'A user with that email already exists. Please use a different email.' })
    }
  })(req, res, next)
})

module.exports = router

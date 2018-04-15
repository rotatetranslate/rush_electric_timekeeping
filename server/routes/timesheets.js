// const express = require('express')
// const router = express.Router()
// const Timesheet = require('../models/timesheet')
//
// router.get('/', async (req, res, next) => {
//   try {
//     const users = await User.find({})
//     const usersWithoutPassword = users.map(removePassword)
//     res.status(200).json({ users: usersWithoutPassword })
//   } catch(err) {
//     res.json({ error: err })
//   }
// })
//
// router.get('/:id', async (req, res, next) => {
//   const { params: { id } } = req
//   try {
//     const user = await User.findOne({ _id: id })
//     const timesheets = await user.timeSheets()
//     const userWithoutPassword = removePassword(user)
//     res.status(200).json({ user: userWithoutPassword, timesheets })
//   } catch(err) {
//     res.json({ error: err })
//   }
// })
//
// module.exports = router

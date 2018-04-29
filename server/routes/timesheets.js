const express = require('express')
const router = express.Router()
const Timesheet = require('../models/timesheet')

// const timesheetQueryBuilder = query => {
//   const { employee, project, start: $gte, end: $lte } = query
//
// }


router.get('/', async (req, res, next) => {
  const { employee, project } = req.query
  try {
    const timesheets = await Timesheet.find({ employee })
    console.log('timesheets', timesheets)
    if (!timesheets.length) throw new Error('No timesheets found for specified query')
    res.status(200).json({ timesheets })
  } catch(error) {
    res.json({ error: 'No timesheets found for specified query' })
  }
})

// create timesheet
router.post('/', async (req, res, next) => {
  const { employee, date, hours, project } = req.body
  const timesheet = await Timesheet.create()
})

// approve timesheet
router.patch('/:id', async (req, res, next) => {
  try {
    const { params: { id } } = req
    const approvedTimesheet = Timesheet.findByIdAndUpdate(id, { approved: true })
    if (!approvedTimesheet) throw new Error('Error approving timesheet')
    res.status(200).json({ successMessage: 'Successfully approved timesheet!' })
  } catch(error) {
    res.json({ error })
  }
})

module.exports = router

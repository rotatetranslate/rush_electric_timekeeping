const mongoose = require('mongoose')
const User = require('./user')
const Project = require('./project')

const TimesheetSchema = new mongoose.Schema({
  date: { type: Date, required: true, default: Date.now() },
  employee: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  hours: { type: Number, required: true, min: 0, max: 24 },
  project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
  approved: { type: Boolean, default: false }
})

const Timesheet = mongoose.model('Timesheet', TimesheetSchema)

module.exports = Timesheet

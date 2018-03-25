const mongoose = require('mongoose')
const User = require('./user')
const Project = require('./project')

const TimeSheetSchema = new mongoose.Schema({
	date: { type: Date, required: true, default: Date.now() },
	employee: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
	hours: { type: Number, required: true, min: 0, max: 24 },
	project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
})

const TimeSheet = mongoose.model('TimeSheet', TimeSheetSchema)

module.exports = TimeSheet

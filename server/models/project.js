const mongoose = require('mongoose')
const TimeSheet = require('./timesheet')

const ProjectSchema = new mongoose.Schema({
  details: { type: String },
  name: { type: String, required: true },
})
//
// ProjectSchema.methods.timeSheets = function(cb) {
//   mongoose.model('TimeSheet').find({ project: this._id }, (err, timesheets) => {
//     cb(err, timesheets)
//   })
// }

ProjectSchema.methods.timeSheets = async function() {
  try {
    const timesheets = await mongoose.model('TimeSheet').find({ project: this._id })
    console.log('timesheets?', timesheets)
    return timesheets
  } catch(err) {
    console.log('err')
    return err
  }
}

const Project = mongoose.model('Project', ProjectSchema)

module.exports = Project

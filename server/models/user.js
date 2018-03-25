const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const TimeSheet = require('./timesheet')

const UserSchema = new mongoose.Schema({
	accessToken: String,
	admin: { type: Boolean, default: false },
	email: { type: String, require: true, unique: true },
	hasSetCustomPassword: { type: Boolean, default: false },
  password: { type: String, required: true },
	name: {type: String, required: true, unique: true }
})

UserSchema.pre('save', function(next) {
  var user = this

  if (!user.isModified('password')) return next()

  return bcrypt.hash(user.password, 10, (err, hash) => {
    if (err) return next(err)
    user.password = hash
    return next()
  })
})

UserSchema.methods.comparePassword = function(password, cb) {
  var user = this
  return bcrypt.compare(password, user.password, cb)
}

UserSchema.methods.timeSheets = function(cb) {
  mongoose.model('TimeSheet').find({ employee: this._id }, (err, timesheets) => {
    cb(err, timesheets)
  })
}

const User = mongoose.model('User', UserSchema)

module.exports = User

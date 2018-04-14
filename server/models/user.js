const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Timesheet = require('./timesheet')

const UserSchema = new mongoose.Schema({
  accessToken: String,
  admin: { type: Boolean, default: false },
  email: { type: String, require: true, unique: true },
  hasSetCustomPassword: { type: Boolean, default: false },
  password: { type: String, required: true },
  name: {type: String, required: true, unique: true }
})

UserSchema.pre('save', function(next) {
  const user = this

  if (!user.isModified('password')) return next()

  return bcrypt.hash(user.password, 10, (err, hash) => {
    if (err) return next(err)
    user.password = hash
    return next()
  })
})

UserSchema.methods.comparePassword = function(password, cb) {
  const user = this
  return bcrypt.compare(password, user.password, cb)
}

// UserSchema.methods.timeSheets = function(cb) {
//   mongoose.model('Timesheet').find({ employee: this._id }, (err, timesheets) => {
//     cb(err, timesheets)
//   })
// }
UserSchema.methods.timeSheets = async function() {
  try {
    const timesheets = await mongoose.model('Timesheet').find({ employee: this._id })
    return timesheets
  } catch(err) {
    console.log(err)
    return err
  }
}

const User = mongoose.model('User', UserSchema)

module.exports = User

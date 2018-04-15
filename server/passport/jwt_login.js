const User = require('../models/user')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const jwtSecret = process.env.JWT_SECRET

const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt')
opts.secretOrKey = jwtSecret

module.exports = passport => {
  passport.use('jwt', new JwtStrategy(opts, async (jwt_payload, done) => {
    try {
      const user = await User.findOne({_id: jwt_payload.id})
      const timesheets = await user.timeSheets()
      const { admin, _id: id, email, name } = user
      const payload = {
        admin,
        id,
        email,
        name,
        timesheets
      }
      return done(null, payload)
    } catch(err) {
      return done(new Error(err.message || err), false)
    }
  }))
}
// module.exports = passport => {
//   passport.use('jwt', new JwtStrategy(opts, (jwt_payload, done) => {
//     console.log('jwt_payload', jwt_payload)
//     User.findOne({_id: jwt_payload.id}, (err, user) => {
//       if (err || !user) return done(new Error('User not found'), false)
//
//       user.timeSheets((err, timesheets) => {
//         const { admin, _id: id, email, name } = user
//         const payload = {
//           admin,
//           id,
//           email,
//           name,
//           timesheets
//         }
//         return done(null, payload)
//       })
//     })
//   }))
// }

const User = require('../models/user')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const jwtSecret = process.env.JWT_SECRET

const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt')
opts.secretOrKey = jwtSecret

module.exports = passport => {
  passport.use('admin', new JwtStrategy(opts, (jwtPayload, done) => {
    try {
      const { admin } = jwtPayload
      if (!admin) throw new Error('Unathorized')
      return done(null, true)
    } catch(err) {
      return done(err.message || err)
    }
  }))
}

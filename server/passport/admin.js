const User = require('../models/user')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const jwtSecret = process.env.JWT_SECRET

const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt')
opts.secretOrKey = jwtSecret

module.exports = passport => {
  passport.use('isAdmin', new JwtStrategy(opts, async (jwt_payload, done) => {
    console.log('hello?')
    try {
      console.log('jwt_payload', jwt_payload)
      const { admin } = jwtPayload
      if (!admin) throw new Error('Unathorized')
      return done(null, true)
    } catch(err) {
      return done(new Error(err.message || err), false)
    }
  }))
}

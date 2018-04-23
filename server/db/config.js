const mongoose = require('mongoose')
// const url = process.env.MONGODB_URI || 'mongodb://localhost/rush_electric'
const url = 'mongodb://localhost/rush_electric'

mongoose.connect(url)

module.exports = mongoose

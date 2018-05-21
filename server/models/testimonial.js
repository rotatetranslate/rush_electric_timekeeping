const mongoose = require('mongoose')
const User = require('./user')

const TestimonialSchema = new mongoose.Schema({
  name: { type: String, required: true },
  body: { type: String, required: true },
  date: { type: Date, default: Date.now() }
})

const Testimonial = mongoose.model('Testimonial', TestimonialSchema)

module.exports = Testimonial

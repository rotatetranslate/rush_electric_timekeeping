const express = require('express')
const router = express.Router()
const Testimonial = require('../models/testimonial')

// get all testimonials
router.get('/', async (req, res, next) => {
  try {
    const testimonials = await Testimonial.find({})
    res.status(200).json({ testimonials: testimonials.reverse() })
  } catch(err) {
    res.json({ error: err })
  }
})

// submit testimonial
router.post('/', async (req, res, next) => {
  try {
    console.log('req.body', req.body)
    const { name = 'Anonymous', body } = req.body
    const newTestimonial = await Testimonial.create({ name, body })
    res.status(200).json({ newTestimonial })
  } catch(err) {
    res.json({ error: err })
  }
})




module.exports = router

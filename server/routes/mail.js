const express = require('express')
const router = express.Router()
const { mailForm } = require('../helpers')

// const rushElectricEmail = 'rushelectric@att.net'
const rushElectricEmail = 'adamberro@gmail.com'

router.post('/', async (req, res, next) => {
  const {
    name,
    email,
    phone = 'Not Provided',
    subject = 'Inquiry from Rushelectric.com',
    message
  } = req.body

  const emailMessage = {
    to: rushElectricEmail,
    from: email,
    subject,
    text: `Name: ${name}\n\nPhone: ${phone}\n\n${message}`
  }

  mailForm(emailMessage)

  res.status(200).json({ message: 'successfully sent' })

  // try {
  //   const response = await mailForm(emailMessage)
  //
  // } catch(error) {
  //   console.log(error)
  // }
})

module.exports = router

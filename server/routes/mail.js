/*
const msg = {
  to: 'adamberro@gmail.com',
  from: 'test@example.com',
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};
*/
const express = require('express')
const router = express.Router()

const rushElectricEmail = 'adamberro@gmail.com'

const mailForm = async message => {
  const sgMail = require('@sendgrid/mail')
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  try {
    const result = sgMail.send(message)
  } catch(error) {
    console.log('error sending mail', error)
  }
}

router.post('/', async (req, res, next) => {
  console.log('mail req.body', req.body)
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

  try {
    const response = await mailForm(emailMessage)
  } catch(error) {
    console.log(error)
  }
})

module.exports = router

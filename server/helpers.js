const removePassword = ({ _doc: { password, hasSetCustomPassword, ...rest } = {} }) => rest

const genRandomPassword = (min = 49, max = 122) =>
  [...Array(10)].fill(null).map(x => String.fromCharCode(Math.floor(Math.random() * (max - min)) + min)).join('')

const mailForm = async message => {
  const sgMail = require('@sendgrid/mail')
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  sgMail.send(message)
  // try {
  //   const result = await sgMail.send(message)
  //   return result
  // } catch(error) {
  //   console.log('error sending mail', error)
  //   return error
  // }
}

module.exports = {
  removePassword,
  genRandomPassword,
  mailForm
}

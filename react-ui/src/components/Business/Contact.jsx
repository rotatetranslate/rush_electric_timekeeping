import React, { Fragment } from 'react'
import { withStyles } from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import ContactForm from './ContactForm'
import Footer from '../Footer'


const styles = theme => ({
  contactContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: '20px 10px',
  },
  formContainer: {
    width: '100%',
    maxWidth: 720,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    margin: 10,
    boxShadow: '8px 8px 15px #aaa'
  },
  contact: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.common.white,
    textAlign: 'center',
    padding: 20,
    boxShadow: '8px 8px 15px #aaa'
  },
})

const Contact = ({classes}) => (
  <Fragment>
    <div className={classes.contactContainer}>
      <div className={classes.contact}>
        <h1>Contact Us</h1>
        <p>Please give us a call at (626) 945-5801</p>
        <p>Or, send us a message</p>
      </div>
      <div className={classes.formContainer}>
        <ContactForm />
      </div>
    </div>
    <Footer />
  </Fragment>
)

export default withStyles(styles)(Contact)

import React from 'react'
import { withStyles } from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import ContactForm from './ContactForm'

const key = 'AIzaSyD45i356tSIhtFX0jftVrjxE9nlQQTiK4A'

const styles = theme => ({
  contactContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto 10px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      margin: 10
    }
  },
  formContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    margin: 10,
    boxShadow: '8px 8px 15px #aaa'

  },
  contact: {
    color: theme.palette.common.white,
    textAlign: 'center',
    padding: 20,
  },
  mapContainer: {
    backgroundColor: theme.palette.primary.light,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    margin: 10,
    boxShadow: '8px 8px 15px #aaa',
  },
  mapContent: {
    width: '100%',
    overflow: 'hidden',
    paddingBottom: '70%',
    position: 'relative',
    '& iframe': {
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0
    }
  },
})

const mapSrc = `https://www.google.com/maps/embed/v1/place?q=place_id:ChIJb7t2buzQwoARy3hxZsNv5fM&key=${key}`

const Contact = ({classes}) => (
  <div className={classes.contactContainer}>
    <div className={classes.mapContainer}>
      <div className={classes.contact}>
        <h1>Contact Us</h1>
        <p>Please give us a call at (626) 945-5801</p>
        <p>Or, send us a message</p>
      </div>

      <div className={classes.mapContent}>
        <iframe
          title="Rush Electric Map"
          frameBorder="0"
          src={mapSrc} allowFullScreen>
        </iframe>
      </div>
    </div>
    <div className={classes.formContainer}>
      <ContactForm />
    </div>
  </div>
)

export default withStyles(styles)(Contact)

import React from 'react'
import { withStyles } from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import ContactForm from './ContactForm'

// google maps api key
const key = 'AIzaSyD45i356tSIhtFX0jftVrjxE9nlQQTiK4A'

const styles = theme => ({
  contactContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: '50px 100px',
    // maxWidth: '1024px'
  },
  contactFormContainer: {
    // width: '35vw'
  },
  mapContainer: {
    position: 'relative'
    // width: '25vw'
  },
  iframe: {
    width: '100%'
  }
})

// address 10124 Rush St, South El Monte, CA 91733
// phone (626) 448-8911
const mapSrc = `https://www.google.com/maps/embed/v1/place?q=place_id:ChIJb7t2buzQwoARy3hxZsNv5fM&key=${key}`


const Contact = ({classes}) => (
  <div className={classes.contactContainer}>
    <div className={classes.mapContainer} >
      <Paper>
        <h1>Contact Us</h1>
        <p>Please give us a call at (626) 448-8911</p>
        <p>Or, send us a message</p>
      </Paper>

      <Paper>
        <iframe
          className={classes.iframe}
          title="Rush Electric Map"
          frameBorder="0"
          src={mapSrc} allowFullScreen>
        </iframe>
      </Paper>
    </div>

    <div classes={classes.contactFormContainer}>
      <ContactForm/>
    </div>
  </div>
)

export default withStyles(styles)(Contact)

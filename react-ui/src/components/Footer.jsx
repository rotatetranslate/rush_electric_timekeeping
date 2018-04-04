import React from 'react'
import { withStyles } from 'material-ui/styles'
import AccountCircle from 'material-ui-icons/AccountCircle'
import Phone from 'material-ui-icons/Phone'
import MailOutline from 'material-ui-icons/MailOutline'
import LocationOn from 'material-ui-icons/LocationOn'
import Logo from './Logo'

const styles = theme => ({
  footer: {
    // position: 'absolute',
    // bottom: 0,
    height: '100px',
    // width: '100vw',
    '& ul': {
      color: theme.palette.primary.contrastText,
      display: 'flex',
      height: '100%',
      // width: '100vw'
    }
  }
})

const Footer = ({classes}) => {
  return (
    <div className={classes.footer}>
      <ul>
        <li>10124 Rush St, South El Monte, CA 91733</li>
        <li>(626) 448-8911</li>
        <li>rushelectric@att.net</li>
      </ul>
    </div>
  )
}

export default withStyles(styles)(Footer)

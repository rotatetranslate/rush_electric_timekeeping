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
  },
  footerItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '0 10px',
    textAlign: 'center',
    '& h4': {
      fontWeight: 300,
      margin: '0 10px'
    },
    '& :hover': {
      fill: theme.palette.secondary.main
    }
  },
  icon: {
    paddingBottom: '5px',
    // '& :hover': {
    //   fill: theme.palette.secondary.main
    // }
  },
  footerList: {
    padding: '0 10px',
    display: 'flex',
    justifyContent: 'space-between'
  },
  logo: {
    height: '50%',
    marginRight: 'auto'
  },
})

const address = {
  street: '10124 Rush St.',
  city: 'South El Monte, CA 91733'
}
const phone = '(626) 448-8911'
const email = 'rushelectric@att.net'

const Footer = ({classes}) => {
  return (
    <div className={classes.footer}>
      <ul className={classes.footerList}>
        <li className={classes.logo}>
          <Logo height='100%' />
        </li>
        <li>
          <div className={classes.footerItem}>
            <LocationOn className={`${classes.icon} icon`} />
            <h4>{address.street}</h4>
            <h4>{address.city}</h4>
          </div>
        </li>
        <li>
          <div className={classes.footerItem}>
            <Phone className={classes.icon} />
            <h4>{phone}</h4>
          </div>
        </li>
        <li>
          <div className={classes.footerItem}>
            <MailOutline className={classes.icon} />
            <a style={{ margin: 0 }} href={`mailto:${email}`}><h4>{email}</h4></a>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default withStyles(styles)(Footer)

import React from 'react'
import { withStyles } from 'material-ui/styles'
import AccountCircle from 'material-ui-icons/AccountCircle'
import Phone from 'material-ui-icons/Phone'
import MailOutline from 'material-ui-icons/MailOutline'
import LocationOn from 'material-ui-icons/LocationOn'
import Logo from './Logo'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import facebook from '@fortawesome/fontawesome-free-brands/faFacebookF'
import yelp from '@fortawesome/fontawesome-free-brands/faYelp'

const styles = theme => ({
  footer: {
    backgroundColor: theme.palette.primary.dark,
    // marginTop: 'auto',
    // position: 'absolute',
    // bottom: 0,
    width: '100%',
    '& ul': {
      alignItems: 'center',
      color: theme.palette.primary.contrastText,
      display: 'flex',
      height: '100%',
      listStyle: 'none',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        justifyContent: 'center'
      }
    },
    '& a': {
      textDecoration: 'none',
      color: theme.palette.primary.contrastText
    },
    '& img': {
      height: 60
    },
  },
  footerItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px 0',
    textAlign: 'center',
    '& h4': {
      fontWeight: 300,
      margin: '0 10px'
    },
    '&:hover': {
      '& svg': {
        fill: theme.palette.secondary.main,
      }
    }
  },
  icon: {
    paddingBottom: '5px',
  },
  footerList: {
    padding: '0 10px',
    display: 'flex',
    justifyContent: 'space-between'
  },
  logo: {
    height: '50%',
    // marginRight: 'auto',
    [theme.breakpoints.down('sm')]: {
      margin: 0
    }
  },
  social: {
    color: theme.palette.primary.contrastText,
    marginRight: 'auto',
    '& svg': {
      padding: '0 20px',
      '&:hover': {
        color: theme.palette.secondary.main
      }
    }
  }
})

const address = {
  street: '10124 Rush St.',
  city: 'South El Monte, CA 91733'
}
const phone = '(626) 945-5801'
const email = 'rushelectric@att.net'

const Footer = ({classes}) => {
  return (
    <div className={classes.footer}>
      <ul className={classes.footerList}>
        <li className={classes.logo}>
          <Logo height='100%' />
        </li>
        <li>
          <div className={classes.social}>
            <a href="https://www.yelp.com/biz/rush-electric-south-el-monte-2" target="_blank">
              <FontAwesomeIcon icon={yelp} size="2x"/>
            </a>
            <a href="https://www.facebook.com/Rush-Electric-150903571618161" target="_blank">
              <FontAwesomeIcon icon={facebook} size="2x"/>
            </a>
          </div>
        </li>
        <li>
          <div className={classes.footerItem}>
            <LocationOn className={`${classes.icon} icon`} />
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

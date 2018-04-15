import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom'
import { withStyles } from 'material-ui/styles'
import Button from 'material-ui/Button'
import AccountCircle from 'material-ui-icons/AccountCircle'
import MenuIcon from 'material-ui-icons/Menu'
import { About, Contact, Home } from './Business'
import { Login, Dashboard } from './Timesheet'
import Footer from './Footer'
import Logo from './Logo'
import { getSessionToken } from '../helpers'

const styles = theme => {
  console.log('mui theme?', theme)
  return {
    logo: {
      marginRight: 'auto'
    },
    navbar: {
      '& ul': {
        backgroundColor: theme.palette.primary.dark,
        display: 'flex',
        alignItems: 'center',
        listStyle: 'none',
        margin: 0
      },
      '& a': {
        color: theme.palette.primary.contrastText,
        margin: '0 20px',
        textDecoration: 'none',
      },
      '& img': {
        height: 60
      },
    },
    button: {
      color: theme.palette.primary.contrastText,
    },
    li: {
      transition: 'none',
      '& :hover': {
        backgroundColor: theme.palette.primary.light
      },
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      }
    },
    root: {
      transition: 'none'
    },
    menu: {
      color: theme.palette.common.white,
      [theme.breakpoints.up('md')]: {
        display: 'none'
      }
    }
  }
}

const SiteRouter = (props) => {
  const { classes } = props

  return (
    <Router>
      <div className={classes.navbar}>
          <ul>
            <li className={classes.menu}><MenuIcon /></li>
            <li className={classes.logo}><Link to="/"><Logo/></Link></li>
            <li className={classes.li}><Link to="/about"><Button className={classes.button} {...props}>About</Button></Link></li>
            <li className={classes.li}><Link to="/contact"><Button className={classes.button} {...props}>Contact</Button></Link></li>
          </ul>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" render={() => getSessionToken() ? <Redirect to="/dashboard" /> : <Login/> } />
          <Route path="/dashboard" render={() => getSessionToken() ? <Dashboard/> : <Redirect to="/login" /> } />
          <Footer />
      </div>
    </Router>
  )
}

export default withStyles(styles)(SiteRouter)

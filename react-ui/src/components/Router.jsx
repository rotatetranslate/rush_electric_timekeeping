import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom'
import { withStyles } from 'material-ui/styles'
import Button from 'material-ui/Button'
import AccountCircle from 'material-ui-icons/AccountCircle'
import MenuIcon from 'material-ui-icons/Menu'
import { About, Contact, Home } from './Business'
import { Login } from './Timesheet'
import Footer from './Footer'
import Logo from './Logo'

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
    },
    button: {
      color: theme.palette.primary.contrastText,
    },
    li: {
      transition: 'none',
      '& :hover': {
        backgroundColor: theme.palette.primary.light
      }
    },
    root: {
      transition: 'none'
    }
  }
}

const SiteRouter = (props) => {
  const { classes } = props

  return (
    <Router>
      <div className={classes.navbar}>
          <ul>
            <li className={classes.logo}><Link to="/"><Logo height={75}/></Link></li>
            <li className={classes.li}><Link to="/about"><Button className={classes.button} {...props}>About</Button></Link></li>
            <li className={classes.li}><Link to="/contact"><Button className={classes.button} {...props}>Contact</Button></Link></li>
          </ul>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={Login} />
          <Footer />
      </div>
    </Router>
  )
}

export default withStyles(styles)(SiteRouter)

import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom'
import { withStyles } from 'material-ui/styles'
import Button from 'material-ui/Button'
import AccountCircle from 'material-ui-icons/AccountCircle'
import MenuIcon from 'material-ui-icons/Menu'
import { About, Contact, Home, Testimonials } from './Business'
import { Login, Dashboard } from './Timesheet'
import Navbar from './Navbar'
import Footer from './Footer'
import Logo from './Logo'
import { getSessionToken, fetchUserInfo } from '../helpers'

// const styles = theme => {
//   console.log('mui theme?', theme)
//   return {
//     logo: {
//       marginRight: 'auto',
//       [theme.breakpoints.down('sm')]: {
//         margin: '0 auto'
//       }
//     },
//     navbar: {
//       display: 'flex',
//       flexDirection: 'column',
//       minHeight: '100vh',
//       '& ul': {
//         backgroundColor: theme.palette.primary.dark,
//         display: 'flex',
//         alignItems: 'center',
//         listStyle: 'none',
//         margin: 0
//       },
//       '& a': {
//         color: theme.palette.primary.contrastText,
//         margin: '0 20px',
//         textDecoration: 'none',
//       },
//       // '& img': {
//       //   height: 60
//       // },
//     },
//     button: {
//       color: theme.palette.primary.contrastText,
//     },
//     li: {
//       transition: 'none',
//       '& :hover': {
//         backgroundColor: theme.palette.primary.light
//       },
//       [theme.breakpoints.down('sm')]: {
//         display: 'none'
//       }
//     },
//     root: {
//       transition: 'none'
//     },
//     menu: {
//       color: theme.palette.common.white,
//       position: 'absolute',
//       left: 10,
//       [theme.breakpoints.up('md')]: {
//         display: 'none'
//       }
//     }
//   }
// }

const styles = {}

const SiteRouter = (props) => {
  console.log('props in router?', props)
  const { classes } = props

  return (
    <Router>
      <div className={`${classes.navbar}`}>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/testimonial" component={Testimonials} />
        <Route path="/login" render={() => getSessionToken() ? <Redirect to="/dashboard" /> : <Login/> } />
        <Route path="/dashboard" render={() => getSessionToken() ? <Dashboard/> : <Redirect to="/login" /> } />
      </div>
    </Router>
  )
}

export default withStyles(styles)(SiteRouter)

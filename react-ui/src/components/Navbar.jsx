import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom'
import { withStyles } from 'material-ui/styles'
import Button from 'material-ui/Button'
import AccountCircle from 'material-ui-icons/AccountCircle'
import MenuIcon from 'material-ui-icons/Menu'
import Logo from './Logo'

const styles = theme => ({
  logo: {
    marginRight: 'auto',
    [theme.breakpoints.down('sm')]: {
      margin: '0 auto',
    }
  },
  navList: {
    backgroundColor: theme.palette.primary.dark,
    display: 'flex',
    alignItems: 'center',
    listStyle: 'none',
    margin: 0,
    '& a': {
      color: theme.palette.primary.contrastText,
      margin: '0 20px',
      textDecoration: 'none',
    },
    '& img': {
      height: 110,
      [theme.breakpoints.down('sm')]: {
        height: 60
      },
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
  account: {
    '& :hover': {
      fill: theme.palette.secondary.main
    },
    [theme.breakpoints.down('sm')]: {
      position: 'absolute',
      right: 0
    }
  },
  root: {
    transition: 'none'
  },
  menu: {
    color: theme.palette.common.white,
    position: 'absolute',
    left: 10,
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  }
})


class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    const { classes } = this.props

    return (
      <ul className={classes.navList}>
        <li className={classes.menu}><MenuIcon /></li>
        <li className={classes.logo}><Link to="/"><Logo/></Link></li>
        <li className={classes.li}><Link to="/about"><Button className={classes.button} {...this.props}>About</Button></Link></li>
        <li className={classes.li}><Link to="/contact"><Button className={classes.button} {...this.props}>Contact</Button></Link></li>
        {/* <li className={classes.account}><Link to="/login"><AccountCircle /></Link></li> */}
      </ul>
    )
  }
}

export default withStyles(styles)(Navbar)

import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom'
import { withStyles } from 'material-ui/styles'
import Button from 'material-ui/Button'
import AccountCircle from 'material-ui-icons/AccountCircle'
import MenuIcon from 'material-ui-icons/Menu'
import MailOutline from 'material-ui-icons/MailOutline'
import FlashOn from 'material-ui-icons/FlashOn'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import Drawer from 'material-ui/Drawer'
import Divider from 'material-ui/Divider'
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
        height: 'auto',
        maxWidth: '80vw',
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
      // position: 'absolute',
      // right: 0
      display: 'none'
    }
  },
  root: {
    transition: 'none'
  },
  menu: {
    color: theme.palette.common.white,
    position: 'absolute',
    left: 10,
    '& :hover': {
      fill: theme.palette.secondary.main,
      cursor: 'pointer'
    },
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  }
})


class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      drawerOpen: false
    }
    this.toggleDrawer = this.toggleDrawer.bind(this)
  }

  toggleDrawer() {
    this.setState(prevState => ({ drawerOpen: !prevState.drawerOpen}))
  }

  render() {
    const { classes } = this.props
    const { drawerOpen } = this.state

    return (
      <Fragment>
      <ul className={classes.navList}>
        <li className={classes.menu} onClick={this.toggleDrawer}><MenuIcon /></li>
        <li className={classes.logo}><Link to="/"><Logo/></Link></li>
        <li className={classes.li}><Link to="/about"><Button className={classes.button} {...this.props}>About</Button></Link></li>
        <li className={classes.li}><Link to="/contact"><Button className={classes.button} {...this.props}>Contact</Button></Link></li>
        <li className={classes.account}><Link to="/login"><AccountCircle /></Link></li>
      </ul>

      <Drawer open={drawerOpen} onClose={this.toggleDrawer}>
        <div
          tabIndex={0}
          role="button"
          onClick={this.toggleDrawer}
          onKeyDown={this.toggleDrawer}
        >
        <List component="nav">
          <ListItem button>
            <ListItemIcon>
              <FlashOn />
            </ListItemIcon>
            <Link to="/about"><ListItemText primary="About" /></Link>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <MailOutline />
            </ListItemIcon>
            <Link to="/contact"><ListItemText primary="Contact" /></Link>
          </ListItem>
        </List>
        <Divider />
        <List component="nav">
          <ListItem button>
            <ListItemIcon>
              <AccountCircle />
            </ListItemIcon>
            <Link to="/login">
            <ListItemText primary="Account" />
          </Link>
          </ListItem>
        </List>
      </div>
      </Drawer>
      </Fragment>
    )
  }
}

export default withStyles(styles)(Navbar)

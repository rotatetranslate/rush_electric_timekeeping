import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom'
import { withStyles } from 'material-ui/styles'
import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation'
import PeopleOutline from 'material-ui-icons/PeopleOutline'
import ContentCopy from 'material-ui-icons/ContentCopy'
import LibraryBooks from 'material-ui-icons/LibraryBooks'
import FolderOpen from 'material-ui-icons/FolderOpen'

const styles = theme => ({
  adminBar: {
    bottom: 0,
    position: 'absolute',
    width: '100vw',
  },
  selected: {
    color: theme.palette.primary.light
  }
})

class AdminNavBar extends Component {
  state = {
    value: 0,
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  render() {
    const { classes } = this.props
    const { value } = this.state

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className={classes.adminBar}
      >
        <BottomNavigationAction classes={{ selected: classes.selected }} label="Employees" icon={<PeopleOutline />} />
        <BottomNavigationAction classes={{ selected: classes.selected }} label="Projects" icon={<FolderOpen />} />
        <BottomNavigationAction classes={{ selected: classes.selected }} label="Timesheets" icon={<LibraryBooks />} />
      </BottomNavigation>
    )
  }
}

export default withStyles(styles)(AdminNavBar)

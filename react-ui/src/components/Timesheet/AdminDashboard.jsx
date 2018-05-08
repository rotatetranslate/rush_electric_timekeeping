import React, { Component, Fragment } from 'react'
import AdminNavBar from './AdminNavBar'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({

})

class AdminDashboard extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: props.user
    }
  }

  render() {
    return (
      <Fragment>
        <AdminNavBar />
      </Fragment>
    )
  }
}

export default withStyles(styles)(AdminDashboard)

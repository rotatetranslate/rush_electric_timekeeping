import React, { Component } from 'react'
import { getSessionToken, removeSessionToken, headersWithJwt } from '../../helpers'
import WeekTimesheets from './WeekTimesheets'
import Timesheet from './Timesheet'
import AdminDashboard from './AdminDashboard'
import AdminNavBar from './AdminNavBar'
import EmployeeDashboard from './EmployeeDashboard'

const fetchUserInfo = async jwt => {
  const headers = headersWithJwt(jwt)
  try {
    const res = await fetch('/auth/jwt', {
      method: 'post',
      headers
    })
    const { user } = await res.json()
    return user
  } catch(err) {
    console.log(err)
  }
}

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null
    }
  }

  componentDidMount() {
    const token = getSessionToken()
    fetchUserInfo(token).then(user => {
      this.setState({ user })
    })
  }

  render() {
    const { user } = this.state
    if (user) {
      if (user.admin) {
        return <AdminDashboard user={user} />
      } else {
        return <EmployeeDashboard user={user} />
      }
    }
    return null
  }
}

export default Dashboard

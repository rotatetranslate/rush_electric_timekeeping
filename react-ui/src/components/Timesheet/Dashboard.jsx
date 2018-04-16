import React, { Component } from 'react'
import { getSessionToken, removeSessionToken, headersWithJwt } from '../../helpers'
import WeekTimesheets from './WeekTimesheets'
import Timesheet from './Timesheet'

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
      return (
        <div><Timesheet timesheet={user.timesheets[0]}/></div>
      )
    }
    return <div>No user</div>
  }
}

export default Dashboard

import React, { Component } from 'react'
import { getSessionToken, removeSessionToken, headersWithJwt } from '../../helpers'

class Dashboard extends Component {
  componentDidMount() {
    const token = getSessionToken()
    const header = headersWithJwt(token)
  }

  render() {
    return (
      <div></div>
    )
  }
}

export default Dashboard

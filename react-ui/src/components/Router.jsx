import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Login from './Login'
import Timesheet from './Timesheet'

const MyRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/timesheet" component={Timesheet} />
    </Switch>
  </Router>
)

export default MyRouter

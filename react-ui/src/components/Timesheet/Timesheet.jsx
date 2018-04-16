import React, { Component } from 'react'

class Timesheet extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount() {

  }

  render() {
    const {
      timesheet: {
        approved,
        date,
        hours, 
      }
    } = this.props


    return (
      <div>timesheet</div>
    )
  }
}

export default Timesheet

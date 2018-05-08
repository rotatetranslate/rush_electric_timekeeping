import React, { Component, Fragment } from 'react'
import { withStyles } from 'material-ui/styles'
import LibraryBooks from 'material-ui-icons/LibraryBooks'
import NoteAdd from 'material-ui-icons/NoteAdd'
import ExpandMore from 'material-ui-icons/ExpandMore'
import Done from 'material-ui-icons/Done'
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel'
import format from 'date-fns/format'

const styles = theme => ({

})

const Timesheets = ({ timesheets = []}) => {
  const timesheetDetails = timesheets.reverse().map(timesheet => {
    const formattedDate = format(timesheet.date, 'MMMM DD, YYYY')
    // const approval = timesheet.approved ? <Done style={{ fill: 'green' }}/> : null

    return (
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMore />}>
        {formattedDate} <Done style={{ fill: 'green', }} />
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <b>{`Hours: ${timesheet.hours}`}</b>
      </ExpansionPanelDetails>
    </ExpansionPanel>
    )
  }
)

  return (
    <div style={{ width: '90vw', margin: '0 auto'}}>
      {timesheetDetails}
    </div>
  )
}


class EmployeeDashboard extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: props.user,
      view: ''
      // past time timesheets
      // add new timesheet
    }
  }

  render() {
    const { user } = this.state
    return (
      <Fragment>
        <Timesheets timesheets={user.timesheets}/>
      </Fragment>
    )
  }
}

export default withStyles(styles)(EmployeeDashboard)

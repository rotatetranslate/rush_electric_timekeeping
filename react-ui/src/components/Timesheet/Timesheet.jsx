import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import Select from 'material-ui/Select'
import Input, { InputLabel } from 'material-ui/Input'
import { FormControl, FormHelperText } from 'material-ui/Form'
import { MenuItem } from 'material-ui/Menu'
import { DateTimePicker } from 'material-ui-pickers'

const styles = theme => ({
  formContainer: {
    backgroundColor: theme.palette.primary.light,
    padding: '10px 50px',
    margin: 25,
    boxShadow: '2px 6px 10px #777'
  },
  contactForm: {
    display: 'flex',
    flexDirection: 'column'
  },
  contactButton: {
    width: 166,
    margin: '25px 0 0 0'
  },
  response: {
    color: '#20bf55'
  },
  formControl: {
    marginTop: 20,
    color: theme.palette.common.white
  }
})

const nestedElementProps = {
  style: {
    color: 'white'
  }
}

const datePickerOpts = {
  ampm: false,
  clearable: true,
}

class Timesheet extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedDate: new Date(),
      notes: '',
      project: '',
      responseMessage: ''
    }
  }

  handleDateChange = date => {
    this.setState({ selectedDate: date })
  }

  // handleChange = name => event => {
  //   this.setState({
  //     [name]: event.target.value,
  //   })
  // }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  submitTimesheet = async event => {
    console.log('submitting form')
    event.preventDefault()
    // try {
    //   const response = await fetch('mail/', {
    //     method: 'post',
    //     headers: {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(this.state)
    //   })
      this.setState({ responseMessage: 'Timesheet submitted successfully!'})
    // } catch(err) {
    //   console.log(err)
    // }
  }

  render() {
    const { classes } = this.props
    const { selectedDate } = this.state
    return (
      <div className={classes.formContainer}>
        <form className={classes.contactForm} onSubmit={this.submitTimesheet}>

          <DateTimePicker { ...datePickerOpts }
            value={selectedDate}
            disablePast
            onChange={this.handleDateChange}
            label="Date & Time"
            InputProps={nestedElementProps}
            InputLabelProps={nestedElementProps}
            SelectProps={nestedElementProps}
          />

          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="age-simple">Project</InputLabel>
            <Select
              value={this.state.project}
              onChange={this.handleChange}
              inputProps={{
               ...nestedElementProps,
               name: 'project',
               id: 'project',
             }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={1}>Project 1</MenuItem>
              <MenuItem value={2}>Project 2</MenuItem>
            </Select>
          </FormControl>

          <TextField
            required
            id="notes"
            name="notes"
            label="Notes"
            multiline
            rows="3"
            value={this.state.message}
            onChange={this.handleChange}
            margin="normal"
            InputProps={nestedElementProps}
            InputLabelProps={nestedElementProps}
            SelectProps={nestedElementProps}
          />

          <h3 className={classes.response}>{this.state.responseMessage}</h3>

          <Button
            variant="raised"
            color="primary"
            className={classes.contactButton}
            type="submit"
          >
            Submit Timesheet
          </Button>
        </form>
      </div>
    )
  }
}

export default withStyles(styles)(Timesheet)

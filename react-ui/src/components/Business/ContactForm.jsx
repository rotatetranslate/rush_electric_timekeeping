import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import Logo from '../Logo'

const styles = theme => ({
  paperContainer: {
    backgroundColor: theme.palette.primary.light,
    padding: '10px 50px',
    width: '100%'
  },
  contactForm: {
    display: 'flex',
    flexDirection: 'column'
  },
  contactButton: {
    width: 166,
    margin: '25px 0 0 0'
  }
})

const nestedElementProps = {
  style: {
    color: 'white'
  }
}

class ContactForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      errors: []
    }
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  submitContactForm = async event => {
    console.log('submitting form')
    const { username, password } = this.state
    console.log(JSON.stringify({username, password}))
    event.preventDefault()
    if (!username || !password) {
      this.setState({ error: '⚠️ Please enter your credentials ⚠️'})
    } else {
      try {
        console.log('JSON.stringify({username, password})', JSON.stringify({username, password}))
        const response = await fetch('auth/login/', {
          method: 'post',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({username, password})
        })
        console.log('response', response)
        const json = await response.json()
        console.log('json', json)
      } catch(error) {
        console.log('error logging in', error)
      }
    }
  }

  render() {
    const { classes } = this.props
    return (
      <Paper className={classes.paperContainer}>
        <form className={classes.contactForm} onSubmit={this.submitContactForm}>
          <TextField
            required
            autoFocus={true}
            id="name"
            label="Name"
            value={this.state.name}
            onChange={this.handleChange('name')}
            margin="normal"
            InputProps={nestedElementProps}
            InputLabelProps={nestedElementProps}
            SelectProps={nestedElementProps}
          />

          <TextField
            required
            id="email"
            label="Email"
            value={this.state.email}
            onChange={this.handleChange('email')}
            margin="normal"
            InputProps={nestedElementProps}
            InputLabelProps={nestedElementProps}
            SelectProps={nestedElementProps}
          />

          <TextField
            id="phone"
            label="Phone"
            value={this.state.phone}
            onChange={this.handleChange('phone')}
            margin="normal"
            InputProps={nestedElementProps}
            InputLabelProps={nestedElementProps}
            SelectProps={nestedElementProps}
          />

          <TextField
            id="subject"
            label="Subject"
            value={this.state.subject}
            onChange={this.handleChange('subject')}
            margin="normal"
            InputProps={nestedElementProps}
            InputLabelProps={nestedElementProps}
            SelectProps={nestedElementProps}
          />

          <TextField
            required
            id="message"
            label="Message"
            multiline
            rows="6"
            value={this.state.message}
            onChange={this.handleChange('message')}
            margin="normal"
            InputProps={nestedElementProps}
            InputLabelProps={nestedElementProps}
            SelectProps={nestedElementProps}
          />

          <Button
            variant="raised"
            color="primary"
            className={classes.contactButton}
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Paper>
    )
  }
}

export default withStyles(styles)(ContactForm)

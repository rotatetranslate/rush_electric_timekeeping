import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import Logo from '../Logo'

const styles = theme => ({
  formContainer: {
    backgroundColor: theme.palette.primary.light,
    padding: '10px 50px',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      padding: '10px 15px'
    }
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
      responseMessage: ''
    }
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  submitContactForm = async event => {
    event.preventDefault()
    const { responseMessage, ...information } = this.state
    try {
      const response = await fetch('mail/', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(information)
      })
      this.setState({ responseMessage: 'Form submitted successfully!'})
    } catch(err) {
      console.log(err)
    }
  }


  render() {
    const { classes } = this.props
    return (
      <div className={classes.formContainer}>
        <form className={classes.contactForm} onSubmit={this.submitContactForm}>
          <TextField
            required
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

          <h3 className={classes.response}>{this.state.responseMessage}</h3>

          <Button
            variant="raised"
            color="primary"
            className={classes.contactButton}
            type="submit"
          >
            Submit
          </Button>
        </form>
      </div>
    )
  }
}

export default withStyles(styles)(ContactForm)

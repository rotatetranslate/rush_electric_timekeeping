import React, { Component, Fragment } from 'react'
import { withStyles } from 'material-ui/styles'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import format from 'date-fns/format'
import Footer from '../Footer'

const styles = theme => ({
  container: {
    margin: '0 auto',
    maxWidth: 960,
    padding: 20,
  },
  formContainer: {
    padding: 20,
    backgroundColor: theme.palette.primary.light
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: 20
  },
  button: {
    marginTop: 20,
    width: 150
  },
  testimonial: {
    borderBottom: `1px solid ${theme.palette.grey[400]}`,
    padding: '15px 0',
  },
  title: {
    fontFamily: 'Raleway',
    marginBottom: 20,
    textAlign: 'center'
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

const fetchTestimonials = async () => {
  try {
    const response = await fetch('/testimonials')
    const testimonials = await response.json()
    return testimonials
  } catch(err) {
    console.log('err', err)
  }
}

class Testimonials extends Component {
  constructor(props) {
    super(props)
    this.state = {
      testimonials: [],
      name: '',
      body: ''
    }
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  submitTestimonial = async event => {
    event.preventDefault()
    const { name, body, testimonials } = this.state
    try {
      const response = await fetch('testimonials/', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, body })
      })
      const { newTestimonial } = await response.json()
      const updatedTestimonials = [newTestimonial].concat(testimonials)
      this.setState({
        testimonials: updatedTestimonials,
        responseMessage: 'Thank you!'
      })
    } catch(err) {
      console.log(err)
    }
  }

  componentDidMount() {
    fetchTestimonials().then(({testimonials}) => this.setState({ testimonials }))
  }

  render() {
    const { testimonials = [] } = this.state
    const { classes } = this.props

    return (
      <Fragment>
        <div className={classes.container}>
          <h2 className={classes.title}>Rush Electric Customer Testimonials</h2>
          <div className={classes.formContainer}>
            <form className={classes.form} onSubmit={this.submitTestimonial}>
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
                id="message"
                label="Message"
                multiline
                rows="6"
                value={this.state.body}
                onChange={this.handleChange('body')}
                margin="normal"
                InputProps={nestedElementProps}
                InputLabelProps={nestedElementProps}
                SelectProps={nestedElementProps}
              />

              <h3 className={classes.response}>{this.state.responseMessage}</h3>

              <Button
                variant="raised"
                color="primary"
                className={classes.button}
                type="submit"
              >
                Submit
              </Button>
            </form>
          </div>

          {testimonials.map(testimonial => (
            <div className={classes.testimonial}>
              <h3 className={classes.name}>{`${testimonial.name} \u2022 ${format(testimonial.date, 'MM/DD/YY')}`}</h3>
              <p className={classes.body}>{testimonial.body}</p>
            </div>
          ))}
        </div>
        <Footer/>
      </Fragment>
    )
  }
}

export default withStyles(styles)(Testimonials)

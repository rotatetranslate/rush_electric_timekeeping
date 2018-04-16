import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import { Redirect } from 'react-router-dom'
import Logo from '../Logo'
import { removeDuplicates, setSessionToken, getSessionToken } from '../../helpers'

const styles = theme => ({
  loginContainer: {
    backgroundColor: theme.palette.primary.dark,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '100vh',
  },
  paperContainer: {
    backgroundColor: theme.palette.primary.light,
    marginTop: 25,
    padding: '50px',
  },
  loginButton: {
    marginTop: 30,
  },
  loginForm: {
    display: 'flex',
    flexDirection: 'column'
  },
  title: {
    color: theme.palette.primary.contrastText
  },
  error: {
    color: 'rgb(255, 199, 0)',
    marginBottom: 0
  }
})

const nestedElementProps = {
  style: {
    color: 'white'
  }
}

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      error: ''
    }
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  submitLoginForm = async event => {
    event.preventDefault()

    const { username, password } = this.state

    try {
      const response = await fetch('auth/login/', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({username, password})
      })

      const json = await response.json()

      if (json.error) throw new Error(json.error)

      this.setState({ error: '' })
      setSessionToken(json.token)
    } catch(err) {
      this.setState({ error: `⚠️${err.message} ⚠️` })
    }
  }

  render() {
    const token = getSessionToken()
    if (token) return <Redirect to="/dashboard" />

    const { classes } = this.props
    const { error } = this.state
    return (
      <div className={classes.loginContainer}>

        <Logo height={100} />

        <h2 className={classes.title}>Time Sheets</h2>
        <Paper className={classes.paperContainer}>


          <form className={classes.loginForm} autoComplete="on" onSubmit={this.submitLoginForm}>
            <TextField
              required
              autoComplete="username"
              id="username"
              label="Username (email)"
              value={this.state.username}
              onChange={this.handleChange('username')}
              margin="normal"
              InputProps={nestedElementProps}
              InputLabelProps={nestedElementProps}
              SelectProps={nestedElementProps}
            />

            <TextField
              error={this.state.error ? true : false}
              required
              autoComplete="password"
              id="password"
              label="Password"
              type="password"
              value={this.state.password}
              onChange={this.handleChange('password')}
              margin="normal"
              InputProps={nestedElementProps}
              InputLabelProps={nestedElementProps}
              SelectProps={nestedElementProps}
            />

            <p className={classes.error}>{error}</p>

            <Button
              variant="raised"
              color="primary"
              className={classes.loginButton}
              type="submit"
            >
              Login
            </Button>
          </form>
        </Paper>
      </div>
    )
  }
}

export default withStyles(styles)(Login)

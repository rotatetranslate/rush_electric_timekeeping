import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button';
import Logo from './Logo'

const styles = (theme) => {
  console.log('theme', theme)
  return {
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
      marginTop: 30,
      padding: '50px',
    },
    loginButton: {
      marginTop: 30,
    },
    loginForm: {
      display: 'flex',
      flexDirection: 'column'
    },
  }
}

const nestedElementProps = {
  style: {
    color: 'white'
  }
}

class Login extends Component {
  state = {
    username: '',
    password: '',
    error: ''
}

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.loginContainer}>

        <Logo height={100} />

        <h2 style={{color: 'white'}}>Time Sheets</h2>
        <Paper className={classes.paperContainer}>


          <form className={classes.loginForm} autoComplete="on">
            <TextField
              required
              autoComplete="username"
              autoFocus={true}
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

            <Button variant="raised" color="primary" className={classes.loginButton}>
              Login
            </Button>
          </form>
        </Paper>
      </div>
    )
  }
}

export default withStyles(styles)(Login)

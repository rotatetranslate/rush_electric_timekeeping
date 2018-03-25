import React, { Component } from 'react'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import Login from './Login'
import MyRouter from './Router'

const theme = createMuiTheme({
  overrides: {
    MuiInput: {
      underline: {
        '&:before': {
          backgroundColor: '#ffffff',
        },
        '&:after': {
          backgroundColor: '#ffffff',
        },
        '&:hover:not($disabled):before': {
          backgroundColor: '#ffffff',
        },
        '&:hover:not($disabled):after': {
          backgroundColor: '#ffffff',
        },
      }
    }
  },
  palette: {
    primary: {
      // light: '#30455e',
      // main: '#041e34',
      // dark: '#00000e',
      light: '#5c708b',
      main: '#30455e',
      dark: '#031e34',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#ff6251',
      main: '#fc1d26',
      dark: '#c00000',
      contrastText: '#000000',
    },
  },
})

const App = () => (
  <MuiThemeProvider theme={theme}>
    <MyRouter />
  </MuiThemeProvider>
)

export default App

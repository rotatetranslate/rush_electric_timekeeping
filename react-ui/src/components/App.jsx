import React, { Component } from 'react'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import SiteRouter from './Router'

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
      // light: '#8a9ebb',
      // main: '#5c708b',
      // dark: '#30455e',
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

console.log('theme?', theme)

const App = () => (
  <MuiThemeProvider theme={theme}>
    <SiteRouter />
  </MuiThemeProvider>
)

export default App

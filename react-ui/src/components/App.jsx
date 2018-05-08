import React, { Component } from 'react'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import DateFnsUtils from 'material-ui-pickers/utils/date-fns-utils'
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider'
import SiteRouter from './Router'
import Footer from './Footer'

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
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <SiteRouter />
      {/* <Footer /> */}
    </MuiPickersUtilsProvider>
  </MuiThemeProvider>
)

export default App

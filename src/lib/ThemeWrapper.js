import React from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import theme from './theme'
// import * as Colors from '@material-ui/core/colors/'

const ThemeWrapper = props => {
  return (
    <MuiThemeProvider theme={theme}>
      {props.children}
    </MuiThemeProvider>
  )
}

export default ThemeWrapper

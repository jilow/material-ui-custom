import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import * as Colors from '@material-ui/core/colors/';

console.log(Colors)

const colors = {
  text: '#333d51',
  primary: '#f13e5f',
  secondary: '#333d51'
}

export const theme = createMuiTheme({
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      'Montserrat',
      'Arial',
      'sans-serif'
    ].join(','),
    color: colors.text,
    fontWeightMedium: 500,
    button: {
      fontWeight: 500
    },
  },
  palette: {
    text: {
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)",
      primary: colors.text,
      secondary: "rgba(0, 0, 0, 0.54)",
    },
    primary: {
      light: colors.primary,
      main: colors.primary,
      dark: colors.primary,
      contrastText: '#fff',
    },
    secondary: {
      light: colors.secondary,
      main: colors.secondary,
      dark: colors.secondary,
      contrastText: '#fff',
    }
  }
});

const Theme = props => {
  return (
    <MuiThemeProvider theme={theme}>
      {props.children}
    </MuiThemeProvider>
  )
}

export default Theme

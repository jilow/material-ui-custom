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
  },
  overrides: {
    MuiFormLabel: {
      root: {
        color: colors.text,
        fontWeight: 700,
        fontSize: '0.9rem',
        '&$focused': {
          color: colors.text,
        },
        '&$disabled': {
          
        },
      },
    },
    MuiInputLabel: {
      formControl: {
        transform: 'translate(0, 1.5px) scale(0.75)',
        transformOrigin: 'top left',
      },
      shrink: {
        transform: 'translate(0, 1.5px) scale(0.75)',
        transformOrigin: 'top left',
      },
      animated: {
        transition: 'none'
      }
    },
    MuiInput: {
      root: {
        border: `1px solid #eef2f5`,
        borderRadius: '5px',
        '&:hover': {
          border: `1px solid #BCD0FF`,
        },
        '&$focused': {
          border: `1px solid #BCD0FF`,
        },
        '&$error': {
          border: `1px solid #EE2C62`,
        },
      },
      input: {
        padding: '0.5rem',
        lineHeight: '1.15',
        fontSize: '0.8rem',
      },
      underline: {
        '&:after': {
          borderBottom: 'none',
        },
        '&$focused:after': {
          borderBottom: 'none',
        },
        '&:before': {
          borderBottom: 'none',
        },
        '&:hover:not($disabled):not($focused):not($error):before': {
          borderBottom: 'none',
        }
      },
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

import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#181818',
    },
    secondary: {
      main: '#636363',
    },
  },
});

theme.overrides = {
  MuiTypography: {
    h1: {
      color: '#181818',
      fontSize: '5.5rem',
      fontWeight: 'bold',
      [theme.breakpoints.down('sm')]: {
        fontSize: '3rem',
      },
    },
    h2: {
      color: '#181818',
      fontSize: '5rem',
      fontWeight: 'bold',
      [theme.breakpoints.down('xs')]: {
        fontSize: '2rem',
      },
    },
    h3: {
      color: '#181818',
      fontSize: '4rem',
      fontWeight: 'normal',
      lineHeight: 1.5,
      [theme.breakpoints.down('sm')]: {
        fontSize: '1rem',
      },
    },
    h4: {
      color: '#181818',
      fontSize: '3rem',
      fontWeight: 'normal',
      lineHeight: 1.5,
      [theme.breakpoints.down('sm')]: {
        fontSize: '1rem',
      },
    },
    h5: {
      color: '#181818',
      fontSize: '2rem',
      fontWeight: 'normal',
      lineHeight: 1.5,
      [theme.breakpoints.down('sm')]: {
        fontSize: '1rem',
      },
    },
    h6: {
      color: '#181818',
      fontSize: '1rem',
      fontWeight: 'normal',
      lineHeight: 1.5,
      [theme.breakpoints.down('sm')]: {
        fontSize: '1rem',
      },
    },
    body1: {
      fontSize: '.8rem',
      fontFamily: 'Lato',
      fontWeight: 300,
    },
    body2: {
      fontSize: '1rem',
      fontFamily: 'Lato',
      color: '#5C5C5C',
    },
    caption: {
      fontSize: '.5rem',
      fontFamily: 'Lato',
      color: '#5C5C5C',
    },
  },
  MuiInputBase: {
    root: {
      fontFamily: 'Lato',
      color: '#5C5C5C !important',
      fontSize: '0.92rem',
      fontWeight: 500,
      backgroundColor: 'rgba(186,215,214,0.12) !important',
      height: '3.33rem',
    },
    multiline: {
      height: 'auto',
      minHeight: '3.33rem',
      paddingTop: '1rem'
    },
    input: {
      '&::placeholder': {
        color: '#5C5C5C !important',
        fontSize: '0.92rem',
      },
    },
  },
  MuiInput: {
    root: {
      background: 'transparent !important',
    },
    formControl: {
      marginTop: '0 !important',
    },
    underline: {
      '&:before': {
        borderBottom: '1px solid rgba(196, 196, 196, .4)',
      },
    },
  },
  MuiFormHelperText: {
    root: {
      background: 'transparent !important',
    },
  },
  MuiSelect: {
    icon: {
      top: '1.4rem !important',
      right: '1rem !important',
    },
    select: {
      '&:focus': {
        backgroundColor: 'transparent !important',
      },
    },
    iconFilled: {
      top: 'calc(50% - 12px) !important',
      right: '0 !important',
    },
  },
  MuiFilledInput: {
    root: {
      background: '#F6F6F6 !important',
      borderRadius: '0.375rem',
      padding: 0,
      '&:before': {
        border: 'none !important',
      },
      '&:after': {
        border: 'none !important',
      },
    },
    input: {
      padding: '1rem',
    },
    error: {
      background: 'rgba(251,234,232,0.32) !important',
    },
    disabled: {
      '&:before': {
        borderBottomStyle: 'solid !important',
      },
    },
  },
  MuiButton: {
    root: {
      minWidth: 180,
      minHeight: '3.33rem',
      outline: '0 !important',
      borderRadius: '0.2rem',
      fontSize: '1rem',
      color: '#fff',
      textTransform: 'inherit',
      fontWeight: 'normal',
      fontFamily: 'Lato',
    },
    text: {
      // '&:hover': {
      //   background: 'transparent',
      // },
    },
    contained: {
      backgroundColor: '#43CEA2',
      color: '#fff',
      boxShadow: 'none',
      paddingRight: 25,
      paddingLeft: 25,
      '&:hover': {
        background: '#43CEA2 !important',
        color: '#fff',
        boxShadow: 'none',
      },
    },
  },
};

export default theme;

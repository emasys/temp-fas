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
    body1: {
      fontSize: '.8rem',
      color: '#636363',
    },
    body2: {
      fontSize: '.7rem',
      fontWeight: 'bold',
      color: '#636363',
    },
    button: {
      color: '#008982',
      fontSize: '1rem',
      fontWeight: 'bold',
      lineHeight: '45 px',
    },
    caption: {
      color: '#b4c0c1',
      fontSize: '.5rem',
      fontWeight: 'normal',
      lineHeight: 1.5,
    },
  },
};

export default theme;

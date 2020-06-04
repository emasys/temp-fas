import React from 'react';
import {
  Grid,
  Typography,
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core';
import Navbar from './Navbar';
import SearchBox from './SearchBox';
import vendorImg from '../assets/vendorBanner.svg';
import { formatMoney } from '../util';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    container: {
      padding: '2rem 2.75rem',
      width: '100%',
      display: 'flex',
      backgroundImage: `url(${vendorImg})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
      height: '14.4375rem',
      marginTop: '1.75rem',
      [theme.breakpoints.down('sm')]: {
        height: '22rem',
        paddingTop: '1rem',
      },
    },
    rateWrapper: {
      display: 'flex',
      alignSelf: 'flex-start',
      justifyContent: 'flex-end',
    },
    rate: {
      padding: '.5rem',
      fontWeight: 500,
      color: '#fff',
      fontSize: '0.9375rem',
      background: 'rgba(0, 0, 0, 0.25)',
      borderRadius: '0.1875rem',
    },
    rateText: {
      fontSize: '0.625rem',
    },
    contactWrapper: {
      display: 'flex',
      alignItems: 'flex-end',
    },
    phone: {
      borderRadius: '1.75rem',
      background: 'rgba(0, 0, 0, 0.25)',
      padding: '.5rem 2rem',
      fontWeight: 300,
      color: '#fff',
      fontSize: '0.9375rem',
      paddingLeft: '2.5rem'
    },
    chat: {
      borderRadius: '1.75rem',
      background: '#43CEA2',
      padding: '.5rem 2rem',
      fontWeight: 300,
      paddingLeft: '2.5rem',
      color: '#fff',
      fontSize: '0.9375rem',
      marginLeft: '0.75rem'
    },
  })
);

interface Props {
  rate: number;
  phone: string;
}
const VendorBanner: React.FC<Props> = ({ rate, phone }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} className={classes.rateWrapper}>
        <Typography variant='body2' className={classes.rate}>
          {formatMoney(rate)} Per day
        </Typography>
      </Grid>
      <Grid item xs={6} className={classes.contactWrapper}>
        <Typography variant='body1' className={classes.phone}>
          {phone}
        </Typography>
        <Typography variant='body1' className={classes.chat}>Chat now</Typography>
      </Grid>
    </Grid>
  );
};

export default VendorBanner;

import React from 'react';
import {
  createStyles,
  makeStyles,
  Theme,
  Grid,
  Typography,
  Button,
} from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import VendorLayout from '../../components/VendorLayout';
import { AppState } from '../../lib/initialState';
import VendorBanner from '../../components/VendorBanner';
import verified from '../../assets/verified.svg';
import star from '../../assets/Star.svg';
import location from '../../assets/location.svg';
import Divider from '../../components/Divider';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
    },
    menu: {
      padding: '1.5rem 0 2.5rem',
    },
    vendorWrapper: {
      display: 'flex',
      flexDirection: 'row',
      marginTop: '2rem',
      flexWrap: 'wrap',
    },
    name: {
      color: '#181818',
      fontWeight: 'bold',
      fontSize: '2rem',
      display: 'flex',
      alignItems: 'center',
    },
    verifyIcon: {
      height: '1.5rem',
      marginLeft: '1rem',
      marginTop: '.49rem',
    },
    nameWrapper: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: '1rem',
    },
    button: {
      minHeight: '2.125rem',
      borderRadius: '.2rem',
    },
    reviewWrapper: {
      marginTop: '.8rem',
      display: 'flex',
    },
    reviewText: {
      border: '0.0452rem solid rgba(136, 136, 136, .2)',
      boxSizing: 'border-box',
      marginRight: '1.5625rem',
      borderRadius: '1.75rem',
      padding: '.5rem 1rem',
      fontWeight: 400,
      color: '#888888',
      fontSize: '0.8125rem',
      display: 'flex',
      alignItems: 'center',
    },
    icon: {
      marginRight: '0.6rem',
    },
    divider: {
      marginTop: '5rem'
    },
    vendor: {},
  })
);

interface Props {}
const Vendors: React.FC<Props> = (props) => {
  const classes = useStyles();
  const { query } = useRouter();
  const { rate, phoneNumber, name } = useSelector((state: AppState) =>
    state.vendor.find((vendor) => vendor.id === query.id)
  );
  return (
    <VendorLayout title={'Vendors'}>
      <Grid container className={classes.container}>
        <Grid item xs={12}>
          <VendorBanner rate={rate} phone={phoneNumber} />
        </Grid>
        <Grid item xs={12} className={classes.nameWrapper}>
          <div>
            <Typography variant='body2' className={classes.name}>
              {name}
              <img
                src={verified}
                className={classes.verifyIcon}
                alt='verified'
              />
            </Typography>
            <div className={classes.reviewWrapper}>
              <Typography variant='body2' className={classes.reviewText}>
                <img src={star} className={classes.icon} alt='star' /> 23
                reviews
              </Typography>
              <Typography variant='body2' className={classes.reviewText}>
                <img src={location} className={classes.icon} alt='star' />{' '}
                location
              </Typography>
            </div>
          </div>
          <Button variant='contained' className={classes.button}>
            Book vendor
          </Button>
        </Grid>
        <Grid item xs={12} className={classes.divider}>
          <Divider title='Instagram Feed' buttonText='' />
        </Grid>
        <Grid item xs={12} className={classes.divider}>
          <Divider title='Reviews' buttonText='' />
        </Grid>
      </Grid>
    </VendorLayout>
  );
};

export default Vendors;

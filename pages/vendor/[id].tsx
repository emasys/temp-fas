import React, { useEffect } from 'react';
import {
  createStyles,
  makeStyles,
  Theme,
  Grid,
  Typography,
  Button,
} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import VendorLayout from '../../components/VendorLayout';
import { AppState } from '../../lib/initialState';
import VendorBanner from '../../components/VendorBanner';
import verified from '../../assets/verified.svg';
import star from '../../assets/Star.svg';
import location from '../../assets/location.svg';
import Divider from '../../components/Divider';
import InstagramWidget from '../../components/InstagramWidget';
import { GetStaticProps } from 'next';
import { instance } from '../../config/axiosConfig';
import { IService, IVendor } from '../../interfaces';
import { setValue, handleAuthModal } from '../../redux/actions/common';
import { EActionTypes } from '../../redux/actions/types';
import { fetchVendor } from '../../redux/actions/vendors';

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
      marginTop: '5rem',
    },
    instaWrapper: {
      marginTop: '1rem',
      display: 'flex',
      justifyContent: 'center',
    },
    instaBtn: {
      color: '#5C5C5C',
    },
    vendor: {},
    connectWrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50%',
      padding: '2rem',
      border: '1px solid rgba(0, 0, 0, 0.23)',
      width: '18rem',
      height: '18rem',
      marginTop: '2rem',
    },
    instaIcon: {
      fontSize: '5rem',
      fontWeight: 100,
      marginBottom: '1rem',
    },
  })
);

interface Props {}
const Vendor: React.FC<Props> = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const auth = useSelector((state: AppState) => state.auth.auth);
  const {
    query: { id },
  } = useRouter();

  const vendorObj = useSelector((state: AppState) =>
    state.vendor.find((item) => item.id === id)
  );
  useEffect(() => {
    dispatch(fetchVendor(id));
  }, []);

  const handleBooking = () => {
    if (auth) {
      return dispatch(handleAuthModal(true));
    }
  };

  return (
    <VendorLayout title={'Vendors'} path={`/services/${vendorObj?.serviceId}`}>
      <Grid container className={classes.container}>
        <Grid item xs={12}>
          <VendorBanner rate={vendorObj?.rate} phone={vendorObj?.phoneNumber} />
        </Grid>
        <Grid item xs={12} className={classes.nameWrapper}>
          <div>
            <Typography variant='body2' className={classes.name}>
              {vendorObj?.name}
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
          <Button
            variant='contained'
            onClick={handleBooking}
            className={classes.button}
          >
            Book vendor
          </Button>
        </Grid>
        <Grid item xs={12} className={classes.divider}>
          <Divider title='Instagram Feed' buttonText='' />
        </Grid>
        <Grid item xs={12} className={classes.instaWrapper}>
          <InstagramWidget instagramCode={vendorObj?.instagramToken} />
        </Grid>
        <Grid item xs={12} className={classes.divider}>
          <Divider title='Reviews' buttonText='' />
        </Grid>
      </Grid>
    </VendorLayout>
  );
};

export default Vendor;

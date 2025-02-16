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
import { handleAuthModal, toggleModal } from '../../redux/actions/common';
import { fetchVendor, fetchVendorReviews } from '../../redux/actions/vendors';
import Review from '../../components/Review';
import { getVendorStatus } from '../../redux/selectors/vendors';
import { fetchUserJobs } from '../../redux/actions/jobs';
import { getUserJobs } from '../../redux/selectors/jobs';
import { getOneLocation } from '../../redux/selectors/locations';
import Skeleton from '@material-ui/lab/Skeleton';

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
      textTransform: 'capitalize',
      alignItems: 'center',
      [theme.breakpoints.down('sm')]: {
        fontSize: '1.5rem',
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: '1rem',
      },
    },
    verifyIcon: {
      height: '1.5rem',
      marginLeft: '1rem',
      marginTop: '.49rem',
      [theme.breakpoints.down('xs')]: {
        height: '1rem',
        marginLeft: '.5rem',
        marginTop: '.1rem',
      },
    },
    nameWrapper: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: '1rem',
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
        alignItems: 'flex-start',
      },
    },
    button: {
      minHeight: '2.125rem',
      borderRadius: '.2rem',
      [theme.breakpoints.down('xs')]: {
        marginTop: '1.5rem',
        minHeight: '1.8rem',
      },
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
      minWidth: '7rem',
      fontWeight: 400,
      color: '#888888',
      fontSize: '0.8125rem',
      display: 'flex',
      alignItems: 'center',
      [theme.breakpoints.down('xs')]: {
        padding: '.3rem .7rem',
      },
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
      justifyContent: 'flex-start',
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
    reviews: {
      margin: '3rem 0',
    },
    vendorName: {
      [theme.breakpoints.down('xs')]: {
        width: '100%',
      },
    },
    cardWrapper: {
      display: 'flex',
      maxWidth: '100%',
      height: 'auto',
      overflow: 'scroll',
      '-ms-overflow-style': 'none',
      '&::-webkit-scrollbar': {
        display: 'none',
      },
    },
  }),
);

const Vendor: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const auth = useSelector((state: AppState) => state.auth);
  const vendorObj = useSelector((state: AppState) => state.vendor.activeVendor);
  const loading = useSelector((state: AppState) => state.common.loading);
  const reviews = useSelector((state: AppState) => state.vendor.reviews);
  const { isBooked } = useSelector((state: AppState) => getUserJobs(state));
  const locationData = useSelector((state: AppState) => getOneLocation(state));
  const ownVendor = useSelector((state: AppState) => getVendorStatus(state));
  const {
    query: { id },
  } = useRouter();

  useEffect(() => {
    dispatch(fetchVendor(id));
    if (auth.auth) {
      dispatch(fetchUserJobs());
      dispatch(fetchVendorReviews(id));
    }
  }, [auth]);

  const handleBooking = () => {
    if (!auth.auth) {
      dispatch(toggleModal('login'));
      return dispatch(handleAuthModal(true));
    }
    dispatch(handleAuthModal(true));
    dispatch(toggleModal('bookVendor'));
  };

  const handleEdit = () => {
    if (!auth.auth) {
      dispatch(toggleModal('login'));
      return dispatch(handleAuthModal(true));
    }
    dispatch(handleAuthModal(true));
    dispatch(toggleModal('editVendor'));
  };

  const isOwnPage = ownVendor?.id === vendorObj?.id;

  return (
    <VendorLayout
      title={'Vendor details'}
      path={`/services/${vendorObj?.serviceId}`}
    >
      <Grid container className={classes.container}>
        <Grid item xs={12}>
          <VendorBanner rate={vendorObj?.rate} phone={vendorObj?.phoneNumber} />
        </Grid>
        {loading ? (
          <>
            <div style={{ marginTop: '1rem' }}>
              <Skeleton
                animation="wave"
                variant="rect"
                width={300}
                height={16}
              />
            </div>
            <div style={{ marginTop: '.5rem' }}>
              <Skeleton
                animation="wave"
                variant="rect"
                width={300}
                height={16}
              />
            </div>
          </>
        ) : (
          <Grid item xs={12} className={classes.nameWrapper}>
            <Grid item sm={6} xs={12}>
              <Typography variant="body2" className={classes.name}>
                {vendorObj?.name}
                <img
                  src={verified}
                  className={classes.verifyIcon}
                  alt="verified"
                />
              </Typography>

              <div className={classes.reviewWrapper}>
                <Typography variant="body2" className={classes.reviewText}>
                  <img src={star} className={classes.icon} alt="star" />{' '}
                  {reviews.length ? reviews.length : 0} review
                  {reviews.length > 1 ? 's' : ''}
                </Typography>
                <Typography variant="body2" className={classes.reviewText}>
                  <img src={location} className={classes.icon} alt="location" />
                  {locationData?.state?.label}
                  {locationData?.area?.label
                    ? `, ${locationData?.area?.label}`
                    : ''}
                </Typography>
              </div>
            </Grid>
            {isOwnPage ? (
              <Button
                variant="contained"
                className={classes.button}
                onClick={handleEdit}
              >
                Edit vendor
              </Button>
            ) : (
              <Button
                variant="contained"
                onClick={handleBooking}
                disabled={!!isBooked}
                className={classes.button}
              >
                {isBooked ? 'Booked' : 'Book vendor'}
              </Button>
            )}
          </Grid>
        )}
        <Grid item xs={12} className={classes.divider}>
          <Divider title="Instagram Feed" buttonText="" />
        </Grid>
        <Grid item xs={12} className={classes.instaWrapper}>
          <InstagramWidget
            instagramCode={vendorObj?.instagramToken}
            vendorId={vendorObj?.id}
          />
        </Grid>
        <Grid item xs={12} className={classes.divider}>
          <Divider title="Reviews" buttonText="" />
        </Grid>
        <Grid item xs={12} className={classes.reviews}>
          {loading ? (
            <Skeleton
              animation="wave"
              variant="rect"
              width={'25rem'}
              height={'20rem'}
            />
          ) : (
            <Grid item xs={12} className={classes.cardWrapper}>
              {reviews?.map((review) => (
                <Review value={review} key={review.id} />
              ))}
            </Grid>
          )}
        </Grid>
      </Grid>
    </VendorLayout>
  );
};

export default Vendor;

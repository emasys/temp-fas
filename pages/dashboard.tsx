/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactElement, useEffect, useState } from 'react';
import VendorLayout from '../components/VendorLayout';
import { useSelector, useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { AppState } from '../lib/initialState';
import { handleAuthModal, toggleDrawer } from '../redux/actions/common';
import { makeStyles, Theme, createStyles, Grid } from '@material-ui/core';
import JobSearch from '../components/JobSearch';
import {
  fetchUserJobs,
  fetchVendorJobs,
  setDrawerJob,
} from '../redux/actions/jobs';
import JobsRow from '../components/JobsRow';
import { getUserJobs } from '../redux/selectors/jobs';
import { getVendorStatus } from '../redux/selectors/vendors';
import JobsCard from '../components/JobsCard';
import RequestCard from '../components/RequestCard';
import PaymentCard from '../components/PaymentCard';
import { IJob } from '../interfaces';
import noResult from '../assets/no-result.svg';
import { useRouter } from 'next/router';
import FundsRow from '../components/FundsRow';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {},
    search: {
      margin: '2rem 0',
    },
    cards: {
      margin: '2rem 0 0',
      cursor: 'pointer',
    },
    cardsMobile: {
      margin: '2rem 0 0',
      width: '100%',
      marginRight: '1rem',
    },
    wrapper: {
      minHeight: '100vh',
      paddingTop: '5rem',
      background:
        'linear-gradient(90.81deg, rgba(67, 206, 162, 0.1) 0.44%, rgba(24, 90, 157, 0.1) 98.43%);',
    },
    blur: {
      '-webkit-filter': 'blur(1rem)',
      '-moz-filter': 'blur(1rem)',
      '-o-filter': 'blur(1rem)',
      '-ms-filter': 'blur(1rem)',
      filter: 'blur(1rem)',
    },
    cardWrapper: {
      display: 'flex',
      maxWidth: '100%',
      height: 'auto',
      overflow: 'scroll',
      padding: '.5rem',
      '-ms-overflow-style': 'none',
      '&::-webkit-scrollbar': {
        display: 'none',
      },
      [theme.breakpoints.down('xs')]: {
        // paddingRight: '3rem'
      },
    },
    mobileWrapper: {
      display: 'none',
      [theme.breakpoints.down('xs')]: {
        display: 'flex',
      },
    },
    desktopWrapper: {
      display: 'flex',
      [theme.breakpoints.down('xs')]: {
        display: 'none',
      },
    },
    noResult: {
      [theme.breakpoints.down('xs')]: {
        width: '100%',
      },
    },
    payment: {
      marginTop: '3rem',
    },
  }),
);

export default function Jobs(): ReactElement {
  const classes = useStyles();
  const router = useRouter();
  const { auth } = useSelector((state: AppState) => state.auth);
  const open = useSelector((state: AppState) => state.common.openAuthModal);
  const { allOrders, allJobs } = useSelector((state: AppState) =>
    getUserJobs(state),
  );
  const ownVendor = useSelector((state: AppState) => getVendorStatus(state));
  const payments = useSelector((state: AppState) => state.vendor.payments);
  const [userType, setType] = useState(ownVendor?.id ? 'vendor' : 'user');
  const [payment, setPayment] = useState(false);
  const type = {
    vendor: allOrders,
    user: allJobs,
  };
  const { handleChange, handleSubmit, values, setFieldValue } = useFormik({
    initialValues: {
      search: '',
      type: { value: '' },
    },
    enableReinitialize: true,
    validateOnChange: true,
    validateOnMount: true,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onSubmit: () => {},
  });
  const dispatch = useDispatch();
  useEffect(() => {
    if (!auth) {
      dispatch(handleAuthModal(true));
    }
    if (auth) {
      ownVendor?.id && dispatch(fetchVendorJobs(ownVendor?.id));
      dispatch(fetchUserJobs());
    }
  }, [auth, open]);

  let entries = type[userType];
  if (values.search) {
    entries = entries.filter(
      (item: IJob) =>
        item.customer?.fullName
          ?.toLowerCase()
          ?.includes(values.search.toLowerCase()) ||
        item.vendor?.name?.toLowerCase()?.includes(values.search.toLowerCase()),
    );
  }
  if (values.type.value) {
    if (values.type.value === '""') {
      entries = [...entries];
    } else {
      entries = entries.filter(
        (item: IJob) => item.vendorStatus?.toLowerCase() === values.type.value,
      );
    }
  }

  useEffect(() => {
    if (router.query.tab) {
      const job = [...allJobs, ...allOrders].find(
        (job) => job.id === router.query.tab,
      );
      if (job) {
        dispatch(toggleDrawer(true));
        dispatch(setDrawerJob(job.id, !!job?.customer?.fullName));
      }
    }
  }, []);

  const handleTextChange = (e: any, value?: any, name?: string) => {
    handleChange(e);
    if (value) {
      setFieldValue(name, value?.title ? value.title : value || '');
    }
  };

  return (
    <div className={auth ? classes.container : classes.blur}>
      <VendorLayout title={'Dashboard'}>
        <>
          {!!ownVendor?.id && (
            <>
              <Grid container spacing={2} className={classes.desktopWrapper}>
                <Grid
                  item
                  xs={4}
                  className={classes.cards}
                  onClick={() => {
                    setType('vendor');
                    setPayment(false);
                  }}
                >
                  <JobsCard active={userType === 'vendor' && !payment} />
                </Grid>
                <Grid
                  item
                  xs={4}
                  className={classes.cards}
                  onClick={() => setPayment(!payment)}
                >
                  <PaymentCard active={payment} />
                </Grid>
                <Grid
                  item
                  xs={4}
                  className={classes.cards}
                  onClick={() => {
                    setType('user');
                    setPayment(false);
                  }}
                >
                  <RequestCard active={userType === 'user' && !payment} />
                </Grid>
              </Grid>
              <Grid container className={classes.mobileWrapper}>
                <Grid item xs={12} className={classes.cardWrapper}>
                  <Grid
                    item
                    className={classes.cardsMobile}
                    onClick={() => {
                      setType('vendor');
                      setPayment(false);
                    }}
                  >
                    <JobsCard active={userType === 'vendor' && !payment} />
                  </Grid>
                  <Grid
                    item
                    className={classes.cardsMobile}
                    onClick={() => setPayment(!payment)}
                  >
                    <PaymentCard active={payment} />
                  </Grid>
                  <Grid
                    item
                    className={classes.cardsMobile}
                    onClick={() => {
                      setType('user');
                      setPayment(false);
                    }}
                  >
                    <RequestCard active={userType === 'user' && !payment} />
                  </Grid>
                  <Grid item className={classes.cardsMobile}>
                    <div style={{ width: '2rem' }} />
                  </Grid>
                </Grid>
              </Grid>
            </>
          )}

          {!payment && (
            <Grid container className={classes.search}>
              <Grid item xs={12} sm={10} md={8} lg={6}>
                <JobSearch
                  handleChange={handleTextChange}
                  handleSubmit={handleSubmit}
                  values={values}
                />
              </Grid>
            </Grid>
          )}
          {!!entries.length &&
            !payment &&
            entries.map((job) => (
              <JobsRow
                key={job?.id}
                id={job?.id}
                vendor={!!job?.customer?.fullName}
                color={job?.color}
                date={job?.createdAt}
                name={job?.customer?.fullName || job?.vendor?.name}
                amount={job.cost}
                stage={job.stage}
                status={job.status}
              />
            ))}
          <Grid item xs={12} className={classes.payment}>
            {payment &&
              payments.map((item) => (
                <FundsRow
                  key={item.id}
                  id={item.jobId}
                  status={item.status}
                  amount={item.job.cost}
                />
              ))}
          </Grid>
          {!!!entries.length ||
            (!!!payments.length && (
              <Grid
                item
                xs={12}
                style={{ display: 'flex', justifyContent: 'center' }}
              >
                <img
                  src={noResult}
                  alt="no result"
                  className={classes.noResult}
                />
              </Grid>
            ))}
        </>
      </VendorLayout>
    </div>
  );
}

import React, { ReactElement, useEffect, useState } from 'react';
import VendorLayout from '../components/VendorLayout';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../lib/initialState';
import { handleAuthModal } from '../redux/actions/common';
import { makeStyles, Theme, createStyles, Grid } from '@material-ui/core';
import JobSearch from '../components/JobSearch';
import { fetchUserJobs, fetchVendorJobs } from '../redux/actions/jobs';
import JobsRow from '../components/JobsRow';
import { getUserJobs } from '../redux/selectors/jobs';
import JobsDrawer from '../components/jobsDrawer';
import { getVendorStatus } from '../redux/selectors/vendors';
import { getInvoice } from '../redux/selectors/common';
import JobsCard from '../components/JobsCard';
import RequestCard from '../components/RequestCard';
import PaymentCard from '../components/PaymentCard';
import { IJob } from '../interfaces';

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
      '-ms-overflow-style': 'none',
      '&::-webkit-scrollbar': {
        display: 'none',
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
  })
);

interface Props {}

export default function Jobs({}: Props): ReactElement {
  const classes = useStyles();
  const { auth, id } = useSelector((state: AppState) => state.auth);
  const open = useSelector((state: AppState) => state.common.openAuthModal);
  const { allOrders, allJobs } = useSelector((state: AppState) =>
    getUserJobs(state)
  );
  const ownVendor = useSelector((state: AppState) => getVendorStatus(state));
  const [userType, setType] = useState(ownVendor?.id ? 'vendor' : 'user');
  const type = {
    vendor: allOrders,
    user: allJobs,
  };
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
                  onClick={() => setType('vendor')}
                >
                  <JobsCard />
                </Grid>
                <Grid item xs={4} className={classes.cards}>
                  <PaymentCard />
                </Grid>
                <Grid
                  item
                  xs={4}
                  className={classes.cards}
                  onClick={() => setType('user')}
                >
                  <RequestCard />
                </Grid>
              </Grid>
              <Grid container className={classes.mobileWrapper}>
                <Grid item xs={12} className={classes.cardWrapper}>
                  <Grid item className={classes.cardsMobile}>
                    <JobsCard />
                  </Grid>
                  <Grid item className={classes.cardsMobile}>
                    <PaymentCard />
                  </Grid>
                  <Grid item className={classes.cardsMobile}>
                    <RequestCard />
                  </Grid>
                </Grid>
              </Grid>{' '}
            </>
          )}

          <Grid container className={classes.search}>
            <Grid item xs={12} sm={10} md={8} lg={6}>
              <JobSearch />
            </Grid>
          </Grid>
          {type[userType].map((job) => (
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
        </>
      </VendorLayout>
    </div>
  );
}

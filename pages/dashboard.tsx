import React, { ReactElement, useEffect } from 'react';
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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {},
    search: {
      margin: '2rem 0',
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
  })
);

interface Props {}

export default function Jobs({}: Props): ReactElement {
  const classes = useStyles();
  const { auth, id } = useSelector((state: AppState) => state.auth);
  const { allOrders } = useSelector((state: AppState) => getUserJobs(state));
  const ownVendor = useSelector((state: AppState) =>
    getVendorStatus(state)
  );

  const dispatch = useDispatch();
  useEffect(() => {
    if (!auth) {
      dispatch(handleAuthModal(true));
    }
    if (auth) {
      ownVendor?.id && dispatch(fetchVendorJobs(ownVendor?.id));
    }
  }, [auth]);

  return (
    <div className={auth ? classes.container : classes.blur}>
      <VendorLayout title={'Dashboard'}>
        <>
          <Grid container className={classes.search}>
            <Grid item xs={12} sm={10} md={8} lg={6}>
              <JobSearch />
            </Grid>
          </Grid>
          {allOrders.map((job) => (
            <JobsRow
              key={job?.id}
              id={job?.id}
              vendor
              color={job?.color}
              date={job?.createdAt}
              name={job?.customer?.fullName}
              amount={
                job?.invoice
                  ? Object.values(job.invoice).reduce(
                      (prev, curr) => Number(prev) + Number(curr),
                      0
                    )
                  : 0
              }
              stage={job.vendorStatus}
              status={job.status}
            />
          ))}
        </>
      </VendorLayout>
    </div>
  );
}

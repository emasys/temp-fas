import React, { ReactElement, useEffect } from 'react';
import VendorLayout from '../components/VendorLayout';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../lib/initialState';
import { handleAuthModal } from '../redux/actions/common';
import { makeStyles, Theme, createStyles, Grid } from '@material-ui/core';
import JobSearch from '../components/JobSearch';
import { fetchUserJobs } from '../redux/actions/jobs';

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
    row: {
      display: 'flex',
      alignItems: 'center',
      height: '6rem',
      borderRadius: '0.2rem',
      border: '0.890421px solid #F0F0F0',
      boxSizing: 'border-box',
    },
    indicator: {
      position: 'absolute',
      height: '3.7rem',
      borderRadius: '0.5rem',
      width: '0.3125rem',
      top: '19%',
      left: '-3px',
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

export default function Profile({}: Props): ReactElement {
  const classes = useStyles();
  const { auth } = useSelector((state: AppState) => state.auth);
  const jobs = useSelector((state: AppState) => state.jobs);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!auth) {
      dispatch(handleAuthModal(true));
    }
    if (auth) dispatch(fetchUserJobs());
  }, [auth]);

  return (
    <div className={auth ? classes.container : classes.blur}>
      <VendorLayout title={'Profile'}>
        <>
          <Grid container className={classes.search}>
            <Grid item xs={12} sm={6}>
              <JobSearch />
            </Grid>
          </Grid>
          <Grid container className={classes.row}>
            <Grid item xs={1} style={{ position: 'relative', height: '6rem' }}>
              <div
                className={classes.indicator}
                style={{ backgroundColor: '#574497' }}
              />
            </Grid>
            <Grid item xs={2}>
              pdf
            </Grid>
            <Grid item xs={2}>
              date
            </Grid>
            <Grid item xs={2}>
              name
            </Grid>
            <Grid item xs={2}>
              amount
            </Grid>
            <Grid item xs={2}>
              status
            </Grid>
          </Grid>
        </>
      </VendorLayout>
    </div>
  );
}

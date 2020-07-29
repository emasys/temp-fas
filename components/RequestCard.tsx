import React from 'react';
import {
  Grid,
  createStyles,
  makeStyles,
  Theme,
  Typography,
  IconButton,
  LinearProgress,
  withStyles,
} from '@material-ui/core';
import { useRouter } from 'next/router';
import Furniture from '../assets/furniture.svg';
import { useSelector } from 'react-redux';
import { getVendorStatus } from '../redux/selectors/vendors';
import { AppState } from '../lib/initialState';
import work from '../assets/suitcase.svg';
import { getUserJobs } from '../redux/selectors/jobs';
import { NextWeekRounded } from '@material-ui/icons';

const BorderLinearProgress = withStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 5,
      borderRadius: 5,
    },
    colorPrimary: {
      backgroundColor:'rgba(87, 68, 151, 0.04)',
    },
    bar: {
      borderRadius: 5,
      backgroundColor: 'rgb(87, 68, 151)',
    },
  })
)(LinearProgress);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      borderRadius: '0.2rem',
      padding: '2rem',
      background: 'rgba(87, 68, 151, 0.04)',
      minHeight: '10rem'
    },
    title: {
      color: '#5A5A5A',
      fontSize: '.9rem',
    },
    subTitle: {
      color: '#5A5A5A',
      fontWeight: 'bold',
    },
    work: {
      background: 'rgba(87, 68, 151, 0.1)',
      marginRight: '.5rem',
      '&:hover': {
        background: 'rgba(87, 68, 151, 0.1)',
      },
    },
    workIcon: {
      color: 'rgba(87, 68, 151, 1)'
    },
    content: {
      display: 'flex',
      alignItems: 'center',
    },
    contentInner: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    progress: {
      marginTop: '1rem',
    },
    progressText: {
      fontSize: '.7rem',
      marginBottom: '.3rem',
    },
    progressInner: {
      display: 'flex',
      justifyContent: 'space-between',
    },
  })
);

interface Props {}
const RequestCard: React.FC<Props> = (props) => {
  const classes = useStyles();
  const { jobStat } = useSelector((state: AppState) => getUserJobs(state));
  console.log(jobStat);
  const initialPercent =
    (jobStat?.completedRequest * 100) / jobStat?.totalRequest;
  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} className={classes.content}>
        <IconButton className={classes.work}>
          <NextWeekRounded className={classes.workIcon} />
        </IconButton>
        <div className={classes.contentInner}>
          <Typography variant='body2' className={classes.title}>
            Total work requested
          </Typography>
          <Typography variant='body2' className={classes.subTitle}>
            {jobStat?.totalRequest}
          </Typography>
        </div>
      </Grid>
      {!!jobStat?.totalRequest && (
        <Grid item xs={12} className={classes.progress}>
          <div className={classes.progressInner}>
            <Typography variant='body2' className={classes.progressText}>
              Completed
            </Typography>
            <Typography variant='body2' className={classes.progressText}>
              {jobStat?.completedRequest}
            </Typography>
          </div>
          <BorderLinearProgress variant='determinate' value={initialPercent} />
        </Grid>
      )}
    </Grid>
  );
};

export default RequestCard;

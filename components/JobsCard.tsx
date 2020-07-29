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

const BorderLinearProgress = withStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 5,
      borderRadius: 5,
    },
    colorPrimary: {
      backgroundColor: '#fdf0e7',
    },
    bar: {
      borderRadius: 5,
      backgroundColor: 'rgb(249 132 23)',
    },
  })
)(LinearProgress);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      borderRadius: '0.2rem',
      padding: '2rem',
      background: 'rgba(255, 133, 21, 0.04)',
      minHeight: '10rem',
      [theme.breakpoints.down('sm')]: {
        padding: '.5rem',
      },
      [theme.breakpoints.down('xs')]: {
        padding: '1rem',
        minWidth: '18rem',
      },
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
      background: 'rgba(255, 133, 21, 0.1)',
      marginRight: '.5rem',
      '&:hover': {
        background: 'rgba(255, 133, 21, 0.1)',
      },
    },
    workIcon: {
      height: '1.875rem',
    },
    content: {
      display: 'flex',
      alignItems: 'center',
    },
    contentInner: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      // alignItems: 'center',
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
const JobsCard: React.FC<Props> = (props) => {
  const classes = useStyles();
  const { jobStat } = useSelector((state: AppState) => getUserJobs(state));
  const initialPercent = (jobStat?.completed * 100) / jobStat?.total;
  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} className={classes.content}>
        <IconButton className={classes.work}>
          <img src={work} alt='work' className={classes.workIcon} />
        </IconButton>
        <div className={classes.contentInner}>
          <Typography variant='body2' className={classes.title}>
            Total work received
          </Typography>
          <Typography variant='body2' className={classes.subTitle}>
            {jobStat?.total}
          </Typography>
        </div>
      </Grid>
      <Grid item xs={12} className={classes.progress}>
        <div className={classes.progressInner}>
          <Typography variant='body2' className={classes.progressText}>
            Completed
          </Typography>
          <Typography variant='body2' className={classes.progressText}>
            {jobStat?.completed}
          </Typography>
        </div>
        <BorderLinearProgress variant='determinate' value={initialPercent} />
      </Grid>
    </Grid>
  );
};

export default JobsCard;

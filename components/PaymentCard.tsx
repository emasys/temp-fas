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
import { AccountBalanceRounded } from '@material-ui/icons';
import { formatMoney } from '../util';

const BorderLinearProgress = withStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 5,
      borderRadius: 5,
    },
    colorPrimary: {
      backgroundColor: '#e0f7f7',
    },
    bar: {
      borderRadius: 5,
      backgroundColor: '#19B7B6',
    },
  })
)(LinearProgress);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      borderRadius: '0.2rem',
      padding: '2rem',
      background: 'rgba(25, 183, 182, 0.04)',
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
      background: 'rgba(25, 183, 182, 0.1)',
      marginRight: '.5rem',
      '&:hover': {
        background: 'rgba(25, 183, 182, 0.1)',
      },
    },
    workIcon: {
      color: '#19B7B6',
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

interface Props {
  active?: boolean;
}
const PaymentCard: React.FC<Props> = ({ active }) => {
  const classes = useStyles();
  const { jobStat } = useSelector((state: AppState) => getUserJobs(state));
  const initialPercent = (jobStat?.earnedAmount * 100) / jobStat?.totalCost;
  return (
    <Grid
      container
      className={classes.container}
      style={{ boxShadow: active ? '0px 11px 20px 3px #00000012' : 'none' }}
    >
      <Grid item xs={12} className={classes.content}>
        <IconButton className={classes.work}>
          <AccountBalanceRounded className={classes.workIcon} />
        </IconButton>
        <div className={classes.contentInner}>
          <Typography variant='body2' className={classes.title}>
            Potential earning
          </Typography>
          <Typography variant='body2' className={classes.subTitle}>
            {formatMoney(jobStat?.totalCost)}
          </Typography>
        </div>
      </Grid>
      {!!jobStat?.totalCost && (
        <Grid item xs={12} className={classes.progress}>
          <div className={classes.progressInner}>
            <Typography variant='body2' className={classes.progressText}>
              Earned
            </Typography>
            <Typography variant='body2' className={classes.progressText}>
              {formatMoney(jobStat?.earnedAmount)}
            </Typography>
          </div>
          <BorderLinearProgress variant='determinate' value={initialPercent} />
        </Grid>
      )}
    </Grid>
  );
};

export default PaymentCard;

import * as React from 'react';
import {
  Grid,
  makeStyles,
  Theme,
  createStyles,
  Typography,
  IconButton,
} from '@material-ui/core';
import NavigateNextRoundedIcon from '@material-ui/icons/NavigateNextRounded';
import arrow from '../assets/arrowDown.svg';
import moment from 'moment';
import { formatMoney } from '../util';
import { useDispatch } from 'react-redux';
import { toggleDrawer } from '../redux/actions/common';
import { setDrawerJob } from '../redux/actions/jobs';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {},
    row: {
      display: 'flex',
      alignItems: 'center',
      height: '6rem',
      marginBottom: '1rem',
      borderRadius: '0.2rem',
      background: '#fbfbfb',
      // background: 'linear-gradient(90.81deg, rgb(225 239 234 / 10%) 0.44%, rgb(216 228 241 / 10%) 98.43%)',
      boxSizing: 'border-box',
      [theme.breakpoints.down('xs')]: {
        height: '3rem',
        justifyContent: 'space-between',
      },
    },
    indicator: {
      position: 'absolute',
      height: '3.7rem',
      borderRadius: '0.5rem',
      width: '0.3125rem',
      top: '19%',
      left: '-3px',
      [theme.breakpoints.down('xs')]: {
        top: '.5rem',
        height: '2rem',
      },
    },
    pdf: {
      background: 'rgba(25, 183, 182, 0.1)',
      color: '#5C5C5C',
      height: '2.2262rem',
      width: '80%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '1.113rem',
      [theme.breakpoints.down('xs')]: {
        display: 'none',
      },
    },
    date: {
      [theme.breakpoints.down('xs')]: {
        display: 'none',
      },
    },
    arrow: {
      marginLeft: '.5rem',
    },
    pdfText: {
      color: '#043333',
      fontSize: '0.6919rem',
    },
    pdfWrapper: {
      position: 'relative',
      height: '6rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      [theme.breakpoints.down('xs')]: {
        height: '3rem',
      },
    },
    statusWrapper: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      paddingRight: '2rem',
      cursor: 'pointer',
      [theme.breakpoints.down('xs')]: {
        paddingRight: '.5rem',
      },
    },
    statusBtn: {
      cursor: 'pointer',
      background: '#F9F9F9',
      padding: '.5rem',
      marginLeft: '2rem',
      [theme.breakpoints.down('xs')]: {
        padding: '.2rem',
        marginLeft: '.5rem',
      },
    },
    status: {
      cursor: 'pointer',
      height: '2.2262rem',
      width: 'auto',
      color: '#fff',
      padding: '0 2rem',
      display: 'flex',
      fontSize: '.7rem',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '1.113rem',
      [theme.breakpoints.down('xs')]: {
        display: 'none',
      },
    },
    name: {
      textTransform: 'capitalize',
      [theme.breakpoints.down('xs')]: {
        fontSize: '0.7rem',
      },
    },
    amount: {
      fontSize: '0.7rem',
    },
  })
);

interface IJobsRowProps {
  date: string;
  id: string;
  name: string;
  amount: any;
  vendor?: boolean;
  status: string;
  color: string;
  stage: string;
}

const JobsRow: React.FC<IJobsRowProps> = ({
  date,
  name,
  amount,
  status,
  vendor,
  stage,
  color,
  id,
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleDrawer = () => {
    dispatch(toggleDrawer(true));
    dispatch(setDrawerJob(id, vendor));
  };

  const isPaid = stage === 'Payment completed';
  return (
    <Grid container className={classes.row}>
      <Grid item xs={1} sm={2} className={classes.pdfWrapper}>
        <div
          className={classes.indicator}
          style={{ backgroundColor: color || '#574497' }}
        />
        <div
          className={classes.pdf}
          style={{
            backgroundColor: isPaid
              ? 'rgba(25, 183, 182, 0.1)'
              : 'rgba(255, 133, 21, 0.1)',
          }}
        >
          <Typography
            variant='body2'
            className={classes.pdfText}
            style={{
              color: isPaid ? '#007777' : 'rgb(249 132 23)',
            }}
          >
            {stage}
          </Typography>
        </div>
      </Grid>
      <Grid item xs={2} onClick={handleDrawer} className={classes.date}>
        <Typography variant='body2'>
          {moment(date).format('yyyy-MM-DD')}
        </Typography>
      </Grid>
      <Grid item xs={4} sm={3} onClick={handleDrawer}>
        <Typography variant='body2' className={classes.name}>
          {name}
        </Typography>
      </Grid>
      <Grid item xs={2} onClick={handleDrawer}>
        <Typography
          variant='body2'
          className={classes.amount}
          onClick={handleDrawer}
        >
          {amount ? formatMoney(amount) : 'Awaiting invoice'}
        </Typography>
      </Grid>
      <Grid
        item
        xs={3}
        className={classes.statusWrapper}
        onClick={handleDrawer}
      >
        <Typography
          variant='body2'
          className={classes.status}
          style={{
            background: color || '#574497',
          }}
        >
          {status || 'Not started'}
        </Typography>
        <IconButton className={classes.statusBtn} onClick={handleDrawer}>
          <NavigateNextRoundedIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default JobsRow;

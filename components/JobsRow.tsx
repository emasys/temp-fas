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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {},
    row: {
      display: 'flex',
      alignItems: 'center',
      height: '6rem',
      marginBottom: '1rem',
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
    pdf: {
      background: '#F6F6F6',
      color: '#5C5C5C',
      height: '2.2262rem',
      width: '5.6463rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '1.113rem',
    },
    arrow: {
      marginLeft: '.5rem',
    },
    pdfText: {
      fontSize: '0.6919rem',
    },
    pdfWrapper: {
      position: 'relative',
      height: '6rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    statusWrapper: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      paddingRight: '2rem',
      cursor: 'pointer',
    },
    statusBtn: {
      cursor: 'pointer',
      background: '#F9F9F9',
      padding: '.5rem',
      marginLeft: '2rem',
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
    },
    amount: {
      fontSize: '0.7rem'
    }
  })
);

interface IJobsRowProps {
  date: string;
  name: string;
  amount: string;
  status: string;
  color: string;
  stage: string;
}

const JobsRow: React.FC<IJobsRowProps> = ({
  date,
  name,
  amount,
  status,
  stage,
  color,
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleDrawer = () => {
    dispatch(toggleDrawer(true));
  };
  return (
    <Grid container className={classes.row}>
      <Grid item xs={2} className={classes.pdfWrapper}>
        <div
          className={classes.indicator}
          style={{ backgroundColor: color || '#574497' }}
        />
        <div className={classes.pdf}>
          <Typography variant='body2' className={classes.pdfText}>
            PDF <img src={arrow} alt='arrow' className={classes.arrow} />
          </Typography>
        </div>
      </Grid>
      <Grid item xs={2} onClick={handleDrawer}>
        <Typography variant='body2'>
          {moment(date).format('yyyy-MM-DD')}
        </Typography>
      </Grid>
      <Grid item xs={3} onClick={handleDrawer}>
        <Typography variant='body2'>{name}</Typography>
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

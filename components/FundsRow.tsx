/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import {
  Grid,
  makeStyles,
  Theme,
  createStyles,
  Typography,
  IconButton,
  Button,
} from '@material-ui/core';
import NavigateNextRoundedIcon from '@material-ui/icons/NavigateNextRounded';
import { formatMoney } from '../util';
import { useDispatch } from 'react-redux';
import { toggleDrawer } from '../redux/actions/common';
import { setDrawerJob } from '../redux/actions/jobs';
import { useRouter } from 'next/router';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {},
    row: {
      display: 'flex',
      alignItems: 'center',
      height: '6rem',
      marginBottom: '1rem',
      justifyContent: 'space-between',
      borderRadius: '0.2rem',
      background: '#fbfbfb',
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
      [theme.breakpoints.down('sm')]: {
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
      background: '#f7f3f3',
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
      minHeight: 0,
      color: '#fff',
      padding: '0 2rem',
      display: 'flex',
      fontSize: '.7rem',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '1.113rem',
      [theme.breakpoints.down('xs')]: {
        minWidth: '7rem',
        padding: 0,
        height: '2rem',
      },
    },
    name: {
      textTransform: 'capitalize',
      textAlign: 'center',
      [theme.breakpoints.down('xs')]: {
        fontSize: '0.7rem',
        textAlign: 'left',
      },
    },
    amount: {
      fontSize: '0.7rem',
    },
  }),
);

interface Props {
  id: string;
  amount: any;
  status: string;
}

const FundsRow: React.FC<Props> = ({ amount, status, id }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isWithdrawable = status === 'withdrawable';
  const router = useRouter();
  const handleDrawer = () => {
    dispatch(toggleDrawer(true));
    dispatch(setDrawerJob(id, true));
    const url = `/dashboard?tab=${id}`;
    router.push(url, undefined, { shallow: true });
  };

  const handleWithdraw = () => {
    if (!isWithdrawable) return;
  };

  return (
    <Grid container className={classes.row}>
      <Grid item xs={1} sm={3} md={2} className={classes.pdfWrapper}>
        <div
          className={classes.indicator}
          style={{
            backgroundColor: isWithdrawable ? '#43cea2' : '#f98417',
          }}
        />
        <div
          className={classes.pdf}
          style={{
            backgroundColor: isWithdrawable
              ? 'rgba(25, 183, 182, 0.1)'
              : 'rgba(255, 133, 21, 0.1)',
          }}
        >
          <Typography
            variant="body2"
            className={classes.pdfText}
            style={{
              color: isWithdrawable ? '#007777' : 'rgb(249 132 23)',
            }}
          >
            {isWithdrawable ? 'Processed' : 'Processing'}
          </Typography>
        </div>
      </Grid>
      <Grid item xs={6} sm={5} onClick={handleDrawer}>
        <Typography variant="body2" className={classes.name}>
          {formatMoney(amount)}
        </Typography>
      </Grid>
      <Grid item xs={3} sm={4} md={4} className={classes.statusWrapper}>
        <Button
          variant="contained"
          className={classes.status}
          disabled={!isWithdrawable}
          onClick={handleWithdraw}
        >
          Withdraw now
        </Button>
        <IconButton className={classes.statusBtn} onClick={handleDrawer}>
          <NavigateNextRoundedIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default FundsRow;

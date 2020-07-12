import React, { Fragment } from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../lib/initialState';
import UserMenu from './UserMenu';
import { handleAuthModal, triggerBAV } from '../redux/actions/common';
import Login from './Modal';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {},
    root: {
      maxWidth: '1440px',
      padding: '0 4%',
      margin: 'auto',
    },
    linkWrapper: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    menuWrapper: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    link: {
      fontWeight: 400,
      cursor: 'pointer',
      fontSize: '0.9701rem',
    },
    button: {
      color: '#14C0B8',
      background: '#fff',
      fontSize: '0.9701rem',
      fontWeight: 500,
      minHeight: '2.5rem',
      borderRadius: '.2rem',
      textTransform: 'none',
    },
  })
);

interface Props {}
const Navbar: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state: AppState) => state.auth);
  const classes = useStyles();
  const handleLogin = () => {
    dispatch(handleAuthModal(true));
  };

  const handleCreateVendor = () => {
    dispatch(triggerBAV(true));
    if (!auth) {
      handleLogin();
    }
  };

  return (
    <Fragment>
      <Login />
      <Grid container justify='space-between' className={classes.root}>
        <Grid item sm={3}>
          <Typography variant='body1'>Service Finder</Typography>
        </Grid>
        {auth && (
          <Grid item sm={6} className={classes.menuWrapper}>
            <UserMenu />
          </Grid>
        )}
        {!auth && (
          <Grid item sm={8} md={6} lg={5} className={classes.linkWrapper}>
            <Link href='/'>
              <Typography variant='body1' className={classes.link}>
                Home
              </Typography>
            </Link>
            <Link href='/'>
              <Typography variant='body1' className={classes.link}>
                About{' '}
              </Typography>
            </Link>
            <Link href='/'>
              <Typography variant='body1' className={classes.link}>
                All Services{' '}
              </Typography>
            </Link>
            <Typography
              variant='body1'
              className={classes.link}
              onClick={handleLogin}
            >
              Login
            </Typography>
            <Button
              variant='contained'
              className={classes.button}
              onClick={handleCreateVendor}
            >
              Become a vendor
            </Button>
          </Grid>
        )}
      </Grid>
    </Fragment>
  );
};

export default Navbar;

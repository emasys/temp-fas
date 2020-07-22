import React, { Fragment } from 'react';
import { Grid, Typography, Button, IconButton } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../lib/initialState';
import UserMenu from './UserMenu';
import {
  handleAuthModal,
  triggerBAV,
  toggleMobileDrawer,
} from '../redux/actions/common';
import Login from './Modal';
import menuIcon from '../assets/menuIcon.svg';
import MenuDrawer from './MenuDrawer';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {},
    root: {
      maxWidth: '1440px',
      padding: '0 4%',
      margin: 'auto',
      [theme.breakpoints.down('xs')]: {
        padding: 0,
      },
    },
    linkWrapper: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      [theme.breakpoints.down('xs')]: {
        display: 'none',
      },
    },
    menuWrapper: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      [theme.breakpoints.down('xs')]: {
        display: 'none',
      },
    },
    link: {
      color: '#fff',
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
    mobileNav: {
      display: 'none',
      [theme.breakpoints.down('xs')]: {
        display: 'flex',
        justifyContent: 'flex-end',
      },
    },
    menuIcon: {
      padding: 0,
    },
    icon: {
      padding: 0,
      height: '1rem'
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

  const openMenu = () => {
    dispatch(toggleMobileDrawer(true));
  };

  return (
    <Fragment>
      <Login />
      <MenuDrawer />
      <Grid container justify='space-between' className={classes.root}>
        <Grid item sm={3}>
          <Typography variant='body1' style={{ color: '#fff' }}>
            Service Finder
          </Typography>
        </Grid>
        {auth && (
          <>
            <Grid item sm={6} className={classes.menuWrapper}>
              <UserMenu />
            </Grid>
            <Grid item xs={6} className={classes.mobileNav}>
              <IconButton className={classes.menuIcon} onClick={openMenu}>
                <img src={menuIcon} alt='menu' className={classes.icon} />
              </IconButton>
            </Grid>
          </>
        )}
        {!auth && (
          <>
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
            <Grid item xs={6} className={classes.mobileNav}>
              <IconButton className={classes.menuIcon} onClick={openMenu}>
                <img src={menuIcon} alt='menu' className={classes.icon} />
              </IconButton>
            </Grid>
          </>
        )}
      </Grid>
    </Fragment>
  );
};

export default Navbar;

import React, { Fragment, useEffect } from 'react';
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
import { Router } from 'next/router';
import { fetchUser } from '../redux/actions/auth';
import Meta from './Meta/Meta';
import logo from '../assets/logo.svg';
// import logo from '../assets/fullLogo.svg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {},
    root: {
      maxWidth: '1440px',
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
      borderRadius: 0,
    },
    icon: {
      padding: 0,
      height: '1rem',
    },
    logoWrapper: {
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer'
    },
    logo: {
      height: '1.5rem',
      width: '2rem',
      marginBottom: 4
    },
    logoText: {
      color: '#fff',
      fontWeight: 400,
      fontFamily: 'Roboto',
      fontSize: '1rem'
    },
    title: {
      fontWeight: 300,
      opacity: .6
    }
  })
);

interface Props {}
const Navbar: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state: AppState) => state.auth);
  const classes = useStyles();
  useEffect(() => {
    if (auth) {
      dispatch(fetchUser());
    }
  }, [auth]);
  
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
  useEffect(() => {
    Router.events.on('routeChangeComplete', () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    });
  }, []);

  return (
    <Fragment>
      <Login />
      <MenuDrawer />
      <Meta />
      <Grid container justify='space-between' className={classes.root}>
        <Grid item sm={3} className={classes.logoWrapper}>
          <img src={logo} alt="logo" className={classes.logo} />
          <Typography variant='body2' className={classes.logoText}>
            Service <span className={classes.title}>Finder</span>
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

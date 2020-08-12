import React, { useState, Fragment, useEffect } from 'react';
import { Grid, Typography, IconButton, Button } from '@material-ui/core';
import Router, { useRouter } from 'next/router';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clx from 'clsx';
import back from '../assets/back-arrow.svg';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import {
  handleAuthModal,
  triggerBAV,
  toggleMobileDrawer,
} from '../redux/actions/common';
import Login from './Modal';
import UserMenu from './UserMenu';
import { AppState } from '../lib/initialState';
import menuIcon from '../assets/menuIcon-dark.svg';
import MenuDrawer from './MenuDrawer';
import { fetchUser } from '../redux/actions/auth';
import Meta from './Meta/Meta';
import { ArrowBackIosRounded } from '@material-ui/icons';
import logo from '../assets/logo-dark.svg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      height: '2rem',
      width: '2rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-end',
      cursor: 'pointer',
      padding: '0.25rem',
    },
    title: {
      color: 'rgba(0, 0, 0, 0.87)',
      fontWeight: 400,
      fontSize: '1rem',
      letterSpacing: '.2rem',
      textDecoration: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      [theme.breakpoints.down('xs')]: {
        fontSize: '.8rem',
      },
    },
    back: {
      marginRight: '.5rem',
      height: '1rem',
    },
    root: {
      display: 'flex',
      justifyContent: 'space-between',
      background: '#fff',
      alignItems: 'center',
      padding: '1.25rem 0',
    },
    link: {
      color: '#4c4c4c',
      cursor: 'pointer',
    },
    button: {
      color: '#fff',
      background: '#43CEA2',
      fontSize: '0.9701rem',
      fontWeight: 500,
      borderRadius: '.2rem',
      minHeight: '2.5rem',
      textTransform: 'none',
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
    logo: {
      height: '1rem',
      width: '2rem',
    },
    logoText: {
      color: '#fff',
      fontWeight: 400,
    },
    logoWrapper: {
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
    },
  })
);

interface Props {
  prevPageTitle: string;
  path?: string;
}
const SearchBar: React.FC<Props> = ({ prevPageTitle, path }) => {
  const classes = useStyles();
  const { auth } = useSelector((state: AppState) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    if (auth) {
      dispatch(fetchUser());
    }
  }, [auth]);

  useEffect(() => {
    Router.events.on('routeChangeComplete', () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    });
  }, []);
  const handleLogin = () => {
    dispatch(handleAuthModal(true));
  };
  const goBack = (e: any) => {
    e.preventDefault();
    Router.back();
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
      <Meta />
      <Grid container justify='space-between' className={classes.root}>
        <Grid
          item
          xs={8}
          sm={4}
          className={classes.logoWrapper}
          onClick={goBack}
        >
          <ArrowBackIosRounded className={classes.back} />
          <Typography variant='body1' className={classes.title}>
            {prevPageTitle}
            {/* <img src={logo} alt='logo' className={classes.logo} /> */}
          </Typography>
        </Grid>
        {auth ? (
          <>
            <Grid item sm={6} className={classes.menuWrapper}>
              <UserMenu dark />
            </Grid>
            <Grid item xs={2} sm={6} className={classes.mobileNav}>
              <IconButton className={classes.menuIcon} onClick={openMenu}>
                <img src={menuIcon} alt='menu' className={classes.icon} />
              </IconButton>
            </Grid>
          </>
        ) : (
          <>
            <Grid item sm={8} md={6} lg={4} className={classes.linkWrapper}>
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
            <Grid item sm={6} xs={2} className={classes.mobileNav}>
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

export default SearchBar;

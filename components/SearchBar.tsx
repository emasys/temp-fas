import React, { useState, Fragment } from 'react';
import { Grid, Typography, IconButton, Button } from '@material-ui/core';
import Router, { useRouter } from 'next/router';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clx from 'clsx';
import back from '../assets/back-arrow.svg';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { handleAuthModal } from '../redux/actions/common';
import Login from './Modal';
import UserMenu from './UserMenu';
import { AppState } from '../lib/initialState';

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
      color: '#949494',
      fontWeight: 500,
      fontSize: '1.2rem',
      textDecoration: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
    },
    back: {
      marginRight: '.5rem',
      height: '1rem'
    },
    root: {
      display: 'flex',
      justifyContent: 'space-between',
      background: '#fff',
      alignItems: 'center',
      padding: '1.25rem 0',
    },
    link: {
      color: '#949494',
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
    },
    menuWrapper: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
  })
);

interface Props {
  prevPageTitle: string;
  path: string;
}
const SearchBar: React.FC<Props> = ({ prevPageTitle, path }) => {
  const classes = useStyles();
  const { auth } = useSelector((state: AppState) => state.auth);
  const dispatch = useDispatch();

  const handleLogin = (e: any) => {
    e.preventDefault();
    dispatch(handleAuthModal(true));
  };
  const goBack = (e: any) => {
    e.preventDefault();
    Router.push(path);
  };
  return (
    <Fragment>
      <Login />
      <Grid container justify='space-between' className={classes.root}>
        <Grid item sm={4}>
          <Typography
            variant='body1'
            className={classes.title}
            onClick={goBack}
          >
            <img src={back} alt='back' className={classes.back} />
            {prevPageTitle}
          </Typography>
        </Grid>

        {auth ? (
          <Grid item sm={6} className={classes.menuWrapper}>
            <UserMenu dark />
          </Grid>
        ) : (
          <Grid item sm={8} md={6} lg={4} className={classes.linkWrapper}>
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
            <Link href='/'>
              <Button variant='contained' className={classes.button}>
                Become a vendor
              </Button>
            </Link>
          </Grid>
        )}
      </Grid>
    </Fragment>
  );
};

export default SearchBar;

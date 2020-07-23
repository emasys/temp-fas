import React, { Fragment } from 'react';
import {
  Grid,
  Typography,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@material-ui/core';
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
import {
  AccountCircleOutlined,
  HomeOutlined,
  CloseRounded,
  AccountCircleRounded,
  HomeRounded,
  InfoRounded,
  ExitToAppRounded,
  PersonRounded,
  SupervisorAccountRounded,
} from '@material-ui/icons';
import { logOut } from '../redux/actions/auth';
import { getVendorStatus } from '../redux/selectors/vendors';
import { useRouter } from 'next/router';

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
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    header: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginTop: '1rem',
      marginBottom: '2rem',
    },
    titleWrapper: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginBottom: '1rem',
    },
    link: {
      fontSize: '1rem',
      color: '#4c4c4c',
      padding: '.5rem',
    },
    listItem: {
      paddingLeft: 0,
      display: 'flex',
      alignItems: 'center',
    },
    iconWrapper: {
      borderRadius: '50%',
      padding: '.1rem',
      display: 'flex',
      width: '5rem',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: '.5rem',
    },
    profileIcon: {
      fontSize: '5rem',
      color: '#4c4c4c',
    },
    button: {
      minHeight: '2rem',
    },
  })
);

interface Props {}
const MobileNav: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { auth, id, fullName } = useSelector((state: AppState) => state.auth);
  const ownVendor = useSelector((state: AppState) =>
    getVendorStatus(state, id)
  );
  const classes = useStyles();

  const handleLogin = () => {
    closeDrawer();
    dispatch(handleAuthModal(true));
  };

  const handleCreateVendor = () => {
    dispatch(triggerBAV(true));
    if (!auth) {
      handleLogin();
    }
    closeDrawer();
  };

  const closeDrawer = () => {
    dispatch(toggleMobileDrawer(false));
  };

  const handleLogOut = () => {
    dispatch(logOut());
    closeDrawer();
  };

  const handleProfile = () => {
    closeDrawer();
    router.push('/profile', '/profile');
  };

  const handleDashboard = () => {
    closeDrawer();
    router.push('/dashboard', '/dashboard');
  };

  return (
    <Fragment>
      <Grid container justify='space-between' className={classes.root}>
        <Grid item xs={12} className={classes.header}>
          <CloseRounded onClick={closeDrawer} />
        </Grid>
        {auth && (
          <Grid item xs={12} className={classes.titleWrapper}>
            <div className={classes.iconWrapper}>
              <AccountCircleRounded className={classes.profileIcon} />
            </div>
            <Typography variant='body2'>{fullName}</Typography>
          </Grid>
        )}
        <List aria-label='profile home' style={{ width: '100%' }}>
          <Divider style={{ marginBottom: '.5rem' }} />
          <Link href='/'>
            <ListItem button onClick={closeDrawer}>
              <ListItemIcon className={classes.link}>
                <HomeRounded />
              </ListItemIcon>
              <Typography variant='body2' className={classes.link}>
                Home
              </Typography>
            </ListItem>
          </Link>
          <Link href='/'>
            <ListItem button onClick={closeDrawer}>
              <ListItemIcon className={classes.link}>
                <InfoRounded />
              </ListItemIcon>
              <Typography variant='body2' className={classes.link}>
                About
              </Typography>
            </ListItem>
          </Link>
          {ownVendor?.id && (
            <ListItem button onClick={handleDashboard}>
              <ListItemIcon className={classes.link}>
                <SupervisorAccountRounded />
              </ListItemIcon>
              <Typography variant='body2' className={classes.link}>
                Dashboard
              </Typography>
            </ListItem>
          )}
          {auth && (
            <ListItem button onClick={handleProfile}>
              <ListItemIcon className={classes.link}>
                <PersonRounded />
              </ListItemIcon>
              <Typography variant='body2' className={classes.link}>
                Profile
              </Typography>
            </ListItem>
          )}
          {!ownVendor?.id && (
            <ListItem onClick={handleCreateVendor}>
              <Button
                variant='contained'
                className={classes.button}
                fullWidth
                onClick={handleCreateVendor}
              >
                Become a vendor
              </Button>
            </ListItem>
          )}
          <Divider style={{ marginBottom: '.5rem', marginTop: '1rem' }} />
          {auth ? (
            <ListItem button onClick={handleLogOut}>
              <ListItemIcon className={classes.link}>
                <ExitToAppRounded />
              </ListItemIcon>
              <Typography variant='body2' className={classes.link}>
                Sign out
              </Typography>
            </ListItem>
          ) : (
            <ListItem button onClick={handleLogin}>
              <ListItemIcon className={classes.link}>
                <ExitToAppRounded />
              </ListItemIcon>
              <Typography variant='body2' className={classes.link}>
                Sign in
              </Typography>
            </ListItem>
          )}
        </List>
      </Grid>
    </Fragment>
  );
};

export default MobileNav;

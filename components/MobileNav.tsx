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
  Avatar,
} from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../lib/initialState';
import {
  handleAuthModal,
  triggerBAV,
  toggleMobileDrawer,
  toggleModal,
} from '../redux/actions/common';
import Login from './Modal';
import {
  AccountCircleOutlined,
  AccountCircleRounded,
  HomeRounded,
  InfoRounded,
  ExitToAppRounded,
  PersonRounded,
  SupervisorAccountRounded,
  WorkRounded,
  CloseRounded,
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
    avatar: {
      width: '4rem',
      height: '4rem',
    },
  }),
);

const MobileNav: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { auth } = useSelector((state: AppState) => state.auth);
  const { fullName, profileImage } = useSelector(
    (state: AppState) => state.user,
  );
  const ownVendor = useSelector((state: AppState) => getVendorStatus(state));
  const classes = useStyles();

  const handleLogin = () => {
    closeDrawer();
    dispatch(handleAuthModal(true));
  };

  const handleCreateVendor = () => {
    dispatch(triggerBAV(true));
    if (!auth) {
      return handleLogin();
    }
    dispatch(toggleModal('bav'));
    dispatch(handleAuthModal(true));
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

  const handleVendorPage = () => {
    router.push(`/vendor/${ownVendor.id}`, `/vendor/${ownVendor.id}`);
  };

  return (
    <Fragment>
      <Grid container justify="space-between" className={classes.root}>
        <Grid item xs={12} className={classes.header}>
          <CloseRounded onClick={closeDrawer} />
        </Grid>
        {auth && (
          <Grid item xs={12} className={classes.titleWrapper}>
            <div className={classes.iconWrapper}>
              {profileImage ? (
                <Avatar
                  alt={fullName}
                  src={profileImage}
                  className={classes.avatar}
                  classes={{ img: classes.avatar }}
                />
              ) : (
                <AccountCircleRounded className={classes.profileIcon} />
              )}
            </div>
            <Typography variant="body2">{fullName}</Typography>
          </Grid>
        )}
        <List aria-label="profile home" style={{ width: '100%' }}>
          <Divider style={{ marginBottom: '.5rem' }} />
          <Link href="/">
            <ListItem button onClick={closeDrawer}>
              <ListItemIcon className={classes.link}>
                <HomeRounded />
              </ListItemIcon>
              <Typography variant="body2" className={classes.link}>
                Home
              </Typography>
            </ListItem>
          </Link>
          {ownVendor?.id && (
            <ListItem button onClick={handleVendorPage}>
              <ListItemIcon className={classes.link}>
                <WorkRounded />
              </ListItemIcon>
              <Typography variant="body2" className={classes.link}>
                Vendor
              </Typography>
            </ListItem>
          )}
          <ListItem button onClick={handleDashboard}>
            <ListItemIcon className={classes.link}>
              <SupervisorAccountRounded />
            </ListItemIcon>
            <Typography variant="body2" className={classes.link}>
              Dashboard
            </Typography>
          </ListItem>
          {auth && (
            <ListItem button onClick={handleProfile}>
              <ListItemIcon className={classes.link}>
                <PersonRounded />
              </ListItemIcon>
              <Typography variant="body2" className={classes.link}>
                Profile
              </Typography>
            </ListItem>
          )}
          {!ownVendor?.id && (
            <ListItem button onClick={handleCreateVendor}>
              <Button variant="contained" className={classes.button} fullWidth>
                Become a vendor
              </Button>
            </ListItem>
          )}
          <Link href="/">
            <ListItem button onClick={closeDrawer}>
              <ListItemIcon className={classes.link}>
                <InfoRounded />
              </ListItemIcon>
              <Typography variant="body2" className={classes.link}>
                About
              </Typography>
            </ListItem>
          </Link>
          <Divider style={{ marginBottom: '.5rem', marginTop: '1rem' }} />
          {auth ? (
            <ListItem button onClick={handleLogOut}>
              <ListItemIcon className={classes.link}>
                <ExitToAppRounded />
              </ListItemIcon>
              <Typography variant="body2" className={classes.link}>
                Sign out
              </Typography>
            </ListItem>
          ) : (
            <ListItem button onClick={handleLogin}>
              <ListItemIcon className={classes.link}>
                <ExitToAppRounded />
              </ListItemIcon>
              <Typography variant="body2" className={classes.link}>
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

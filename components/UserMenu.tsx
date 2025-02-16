import React from 'react';
import { Typography, Popover, List, ListItem, Avatar } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import {
  AccountCircle,
  ArrowDropUpRounded,
  ArrowDropDownRounded,
} from '@material-ui/icons';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../lib/initialState';
import { logOut } from '../redux/actions/auth';
import { toggleModal, handleAuthModal } from '../redux/actions/common';
import { getVendorStatus } from '../redux/selectors/vendors';
import { useRouter } from 'next/router';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    linkWrapper: {
      width: '10rem',
      background: '#fff',
    },
    paper: {
      marginTop: '1rem',
    },
    iconWrapper: {
      background: 'rgba(255, 133, 21, 0.1)',
      borderRadius: '50%',
      display: 'flex',
      marginRight: '.5rem',
      justifyContent: 'center',
      alignItems: 'center',
      height: '1.5rem',
      width: '1.5rem',
    },
    icon: {
      color: '#c9c7e2',
    },
    link: {
      fontWeight: 400,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      fontSize: '0.9701rem',
    },
    button: {
      color: '#14C0B8',
      background: '#fff',
      fontSize: '0.9701rem',
      fontWeight: 500,
      minHeight: '2.5rem',
      textTransform: 'none',
    },
    menuItem: {
      color: '#546380',
      fontSize: '0.75rem',
    },
    avatar: {
      width: '2rem',
      height: '2rem',
    },
  }),
);

interface Props {
  dark?: boolean;
}
const UserMenu: React.FC<Props> = ({ dark }) => {
  const { fullName, profileImage } = useSelector(
    (state: AppState) => state.user,
  );
  const dispatch = useDispatch();
  const classes = useStyles();
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const ownVendor = useSelector((state: AppState) => getVendorStatus(state));
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLogOut = () => {
    handleClose();
    dispatch(logOut());
  };

  const handleHome = () => {
    router.push('/', '/');
  };

  const handleProfile = () => {
    router.push('/profile', '/profile');
  };

  const handleVendorPage = () => {
    router.push(`/vendor/${ownVendor.id}`, `/vendor/${ownVendor.id}`);
  };

  const handleDashboard = () => {
    router.push('/dashboard', '/dashboard');
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleBAV = () => {
    dispatch(toggleModal('bav'));
    dispatch(handleAuthModal(true));
  };

  const open = Boolean(anchorEl);

  return (
    <div className={classes.container}>
      <div className={classes.iconWrapper}>
        {profileImage ? (
          <Avatar
            alt={fullName}
            src={profileImage}
            className={classes.avatar}
            classes={{ img: classes.avatar }}
          />
        ) : (
          <AccountCircle
            className={classes.icon}
            style={{ color: dark ? '#5C5C5C' : '#c9c7e2' }}
          />
        )}
      </div>
      <Typography
        aria-describedby="menu"
        variant="body1"
        className={classes.link}
        style={{ color: dark ? '#5C5C5C' : '#c9c7e2' }}
        onClick={handleClick}
      >
        {fullName || 'Hi there '}{' '}
        {open ? (
          <ArrowDropUpRounded fontSize="large" />
        ) : (
          <ArrowDropDownRounded fontSize="large" />
        )}
      </Typography>
      <Popover
        id="menu"
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        classes={{
          paper: classes.paper,
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <List component="nav" className={classes.linkWrapper}>
          <ListItem button onClick={handleHome}>
            <Typography variant="body2" className={classes.menuItem}>
              Home
            </Typography>
          </ListItem>
          {!ownVendor?.id && (
            <ListItem button onClick={handleBAV}>
              <Typography variant="body2" className={classes.menuItem}>
                Become a vendor
              </Typography>
            </ListItem>
          )}
          {ownVendor?.id && (
            <ListItem button onClick={handleVendorPage}>
              <Typography variant="body2" className={classes.menuItem}>
                Vendor
              </Typography>
            </ListItem>
          )}
          <ListItem button onClick={handleDashboard}>
            <Typography variant="body2" className={classes.menuItem}>
              Dashboard
            </Typography>
          </ListItem>
          <ListItem button onClick={handleProfile}>
            <Typography variant="body2" className={classes.menuItem}>
              Profile
            </Typography>
          </ListItem>
          <ListItem button onClick={handleLogOut}>
            <Typography variant="body2" className={classes.menuItem}>
              Sign out
            </Typography>
          </ListItem>
        </List>
      </Popover>
    </div>
  );
};

export default UserMenu;

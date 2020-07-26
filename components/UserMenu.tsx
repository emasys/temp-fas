import React from 'react';
import {
  Grid,
  Typography,
  Button,
  IconButton,
  Popover,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import {
  AccountCircle,
  ArrowDropDown,
  ArrowDropUp,
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
      background: '#C4C4C4',
      borderRadius: '50%',
      display: 'flex',
      marginRight: '.5rem',
      justifyContent: 'center',
      alignItems: 'center',
      height: '1.5rem',
      width: '1.5rem',
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
  })
);

interface Props {
  dark?: boolean;
}
const UserMenu: React.FC<Props> = ({ dark }) => {
  const { fullName } = useSelector((state: AppState) => state.auth);
  const dispatch = useDispatch();
  const classes = useStyles();
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const auth = useSelector((state: AppState) => state.auth);
  const ownVendor = useSelector((state: AppState) =>
    getVendorStatus(state, auth.id)
  );

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
        <AccountCircle />
      </div>
      <Typography
        aria-describedby='menu'
        variant='body1'
        className={classes.link}
        style={{ color: dark ? '#5C5C5C' : '#fff' }}
        onClick={handleClick}
      >
        {fullName || 'Hi there '}{' '}
        {open ? (
          <ArrowDropUpRounded fontSize='large' />
        ) : (
          <ArrowDropDownRounded fontSize='large' />
        )}
      </Typography>
      <Popover
        id='menu'
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
        <List component='nav' className={classes.linkWrapper}>
          <ListItem button onClick={handleHome}>
            <Typography variant='body2' className={classes.menuItem}>
              Home
            </Typography>
          </ListItem>
          {!ownVendor?.id && (
            <ListItem button onClick={handleBAV}>
              <Typography variant='body2' className={classes.menuItem}>
                Become a vendor
              </Typography>
            </ListItem>
          )}
          {ownVendor?.id && (
            <ListItem button onClick={handleDashboard}>
              <Typography variant='body2' className={classes.menuItem}>
                Vendor Dashboard
              </Typography>
            </ListItem>
          )}
          <ListItem button onClick={handleProfile}>
            <Typography variant='body2' className={classes.menuItem}>
              Profile
            </Typography>
          </ListItem>
          <ListItem button onClick={handleLogOut}>
            <Typography variant='body2' className={classes.menuItem}>
              Sign out
            </Typography>
          </ListItem>
        </List>
      </Popover>
    </div>
  );
};

export default UserMenu;

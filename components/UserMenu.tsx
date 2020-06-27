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
import { AccountCircle, ArrowDropDown, ArrowDropUp } from '@material-ui/icons';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../lib/initialState';
import { logOut } from '../redux/actions/auth';

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
      alignItems: 'flex-end',
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
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLogOut = () => {
    handleClose();
    dispatch(logOut());
  };

  const handleClose = () => {
    setAnchorEl(null);
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
        {fullName || 'user name'} <ArrowDropDown />
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

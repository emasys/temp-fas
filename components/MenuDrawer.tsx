import * as React from 'react';
import {
  Grid,
  makeStyles,
  Theme,
  createStyles,
  Drawer,
  Typography,
  Button,
  IconButton,
} from '@material-ui/core';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../lib/initialState';
import {
  toggleDrawer,
  updateInvoiceValue,
  toggleMobileDrawer,
} from '../redux/actions/common';
import { formatMoney } from '../util';
import Collapsible from './Collapsible';
import Reviews from './Reviews';
import phoneIcon from '../assets/phone.svg';
import chat from '../assets/chat.svg';
import { CloseRounded } from '@material-ui/icons';
import Invoice from './Invoice';
import { getInvoice } from '../redux/selectors/common';
import { useEffect } from 'react';
import MobileNav from './MobileNav';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      minWidth: '80%',
      maxWidth: '80%',
      padding: '2% 4%',
      borderRadius: '1rem 0 0 1rem',
    },
  })
);

interface IProps {}

const MenuDrawer: React.FC<IProps> = (props) => {
  const classes = useStyles();
  const status = useSelector((state: AppState) => state.common.mobileDrawer);
  const dispatch = useDispatch();

  const closeDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
    dispatch(toggleMobileDrawer(false));
  };

  return (
    <Drawer
      anchor='right'
      classes={{
        paper: classes.container,
      }}
      open={status}
      onClose={closeDrawer}
    >
      <Grid container>
        <MobileNav />
      </Grid>
    </Drawer>
  );
};

export default MenuDrawer;

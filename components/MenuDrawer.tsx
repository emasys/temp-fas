import * as React from 'react';
import {
  Grid,
  makeStyles,
  Theme,
  createStyles,
  Drawer,
} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../lib/initialState';
import { toggleMobileDrawer } from '../redux/actions/common';
import MobileNav from './MobileNav';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      minWidth: '80%',
      maxWidth: '80%',
      padding: '2% 4%',
      background: 'rgb(231, 243, 239)',
      borderRadius: '.2rem 0 0 .2rem',
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

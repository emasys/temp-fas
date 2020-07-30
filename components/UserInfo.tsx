import React, { useEffect } from 'react';
import {
  Grid,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import Router, { useRouter } from 'next/router';
import Furniture from '../assets/furniture.svg';
import { formatMoney } from '../util';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { AppState } from '../lib/initialState';
import UserInfoForm from './UserInfoForm';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: '3rem',
      [theme.breakpoints.down('sm')]: {
        padding: '1rem'
      },
    },
    imageWrapper: {
      borderRadius: '50%',
      background: 'rgba(255, 133, 21, 0.1)',
      width: '13rem',
      height: '13rem',
      marginBottom: '1rem',

    },
    imageContainer: {
      display: 'flex',
      // justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      [theme.breakpoints.down('sm')]: {
        marginBottom: '1.5rem'
      },
    }
  })
);

interface Props {}
const UserInfo: React.FC<Props> = (props) => {
  const classes = useStyles();
  const user = useSelector((state: AppState) => state.user);
  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} lg={3} className={classes.imageContainer}>
        <div className={classes.imageWrapper}></div>
        <Typography variant="body2">
          {user.fullName}
        </Typography>
      </Grid>
      <Grid item xs={12} lg={6}>
        <div>
          <UserInfoForm />
        </div>
      </Grid>
    </Grid>
  );
};

export default UserInfo;

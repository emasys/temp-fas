import React, { useEffect } from 'react';
import {
  Grid,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import { useSelector } from 'react-redux';
import { AppState } from '../lib/initialState';
import BankDetailsForm from './BankDetailsForm';

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
const BankDetails: React.FC<Props> = (props) => {
  const classes = useStyles();
  const user = useSelector((state: AppState) => state.user);
  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} lg={10}>
        <div>
          <BankDetailsForm />
        </div>
      </Grid>
    </Grid>
  );
};

export default BankDetails;

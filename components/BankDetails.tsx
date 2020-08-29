import React from 'react';
import {
  Grid,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import BankDetailsForm from './BankDetailsForm';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: '3rem',
      [theme.breakpoints.down('sm')]: {
        padding: '1rem',
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
        marginBottom: '1.5rem',
      },
    },
    textHeader: {
      marginBottom: '1rem',
      borderBottom: '1px solid #00000038',
      paddingBottom: '.25rem',
      fontWeight: 100,
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
  }),
);

const BankDetails: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item xs={12}>
        <Typography variant="h5" className={classes.textHeader}>
          Bank details
        </Typography>
      </Grid>
      <Grid item xs={12} lg={10}>
        <div>
          <BankDetailsForm />
        </div>
      </Grid>
    </Grid>
  );
};

export default BankDetails;

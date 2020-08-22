import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import SearchComp from './SearchComp';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'space-between',
      background: '#fff',
      alignItems: 'center',
      padding: '1.25rem 0',
    },
    link: {
      color: '#5C5C5C',
      fontWeight: 500,
      fontSize: '0.7813rem',
    },
  }),
);

const Navbar: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid container justify="space-between" className={classes.root}>
      <Grid item xs={12}>
        <SearchComp />
      </Grid>
    </Grid>
  );
};

export default Navbar;

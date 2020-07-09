import React, { useState } from 'react';
import { Grid, Typography, Link } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clx from 'clsx';
import SearchComp from './SearchComp';

const useStyles = makeStyles((theme: Theme) =>
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
      fontSize: '0.7813rem'
    }
  })
);

interface Props {}
const Navbar: React.FC<Props> = (props) => {
  const classes = useStyles();
  return (
    <Grid container justify='space-between' className={classes.root}>
      <Grid item xs={12} xl={6} sm={9} lg={7}>
        <SearchComp />
      </Grid>
    </Grid>
  );
};

export default Navbar;

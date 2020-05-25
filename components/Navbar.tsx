import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Link from 'next/link';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {},
    linkWrapper: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    link: {
      fontWeight: 400,
      cursor: 'pointer',
      fontSize: '0.9701rem',
    },
    button: {
      color: '#14C0B8',
      fontSize: '0.9701rem',
      fontWeight: 500,
      textTransform: 'none',
    },
  })
);

interface Props {}
const Navbar: React.FC<Props> = (props) => {
  const classes = useStyles();
  return (
    <Grid container justify='space-between'>
      <Grid item xs={3}>
        <Typography variant='body1'>Service Finder</Typography>
      </Grid>
      <Grid item xs={5} className={classes.linkWrapper}>
        <Link href='/'>
          <Typography variant='body1' className={classes.link}>About </Typography>
        </Link>
        <Link href='/'>
          <Typography variant='body1' className={classes.link}>All Services </Typography>
        </Link>
        <Link href='/'>
          <Typography variant='body1' className={classes.link}>Login</Typography>
        </Link>
        <Link href='/'>
          <Button variant='contained' className={classes.button}>
            Become a vendor
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
};

export default Navbar;

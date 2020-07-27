import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useStyles } from './styles';

interface Props {}

const FallBack: React.FC<Props> = (props) => {
  const classes = useStyles();

  return (
    <Grid container justify='center'>
      <Grid item xs={12} className={classes.container}>
        <Typography variant='h2'>
          Sorry, looks like we are having some server issues
        </Typography>
        <Typography variant='h3' style={{ margin: '15px 0' }}>
          We are looking into what went wrong.
        </Typography>
        <a href='/' className={classes.link}>
          <Typography variant='body2'>Return home</Typography>
        </a>
      </Grid>
    </Grid>
  );
};

export default FallBack;

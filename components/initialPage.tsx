import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { AppState } from '../lib/initialState';

interface Props {}

const InitialPage: React.FC<Props> = (props) => {
  const auth = useSelector((state: AppState) => state.auth);
  console.log(auth, '====');
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant='h1'>initial header</Typography>
        <Typography variant='body1'>initial body</Typography>
      </Grid>
    </Grid>
  );
};

export default InitialPage;

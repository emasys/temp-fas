import React, { ReactChild } from 'react';
import { Grid, createStyles, makeStyles, Theme } from '@material-ui/core';
import SearchBar from './SearchBar';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    container: {
      padding: '0 1.25rem',
    },
    content: {},
    divider: {
      opacity: 0.2,
      width: '100%',
      background: '#C4C4C4',
      height: '0.0625rem',
    },
  })
);

interface Props {
  children: ReactChild;
  title: string;
  path: string;
}
const VendorLayout: React.FC<Props> = ({ children, title, path }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item xs={12}>
        <SearchBar prevPageTitle={title} path={path} />
      </Grid>
      <div className={classes.divider} />
      <Grid item xs={12} className={classes.content}>
        {children}
      </Grid>
    </Grid>
  );
};

export default VendorLayout;

import React, { ReactChild } from 'react';
import { Grid, createStyles, makeStyles, Theme } from '@material-ui/core';
import SearchBar from './SearchBar';
import Meta from './Meta/Meta';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    container: {
      padding: '0 4%',
      maxWidth: '1440px',
      margin: 'auto',
      [theme.breakpoints.down('xs')]: {
        width: '100%',
        maxWidth: '100vw',
        overflow: 'hidden'
      },
    },
    content: {},
    divider: {
      opacity: 0.2,
      width: '100%',
      background: '#C4C4C4',
      height: '0.0625rem',
    },
    nav: {
      // padding: '0 4%'
    },
  })
);

interface Props {
  children: ReactChild;
  title: string;
  path?: string;
}
const VendorLayout: React.FC<Props> = ({ children, title, path }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} className={classes.nav}>
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

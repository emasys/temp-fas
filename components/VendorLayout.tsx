import React, { ReactChild } from 'react';
import {
  Grid,
  createStyles,
  makeStyles,
  Theme,
  Divider,
} from '@material-ui/core';
import SearchBar from './SearchBar';
import MenuBar from './MenuBar';

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
}
const Header: React.FC<Props> = ({ children }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item xs={12}>
        <SearchBar />
      </Grid>
      <div className={classes.divider} />
      <Grid item xs={12} className={classes.content}>
        {children}
      </Grid>
    </Grid>
  );
};

export default Header;

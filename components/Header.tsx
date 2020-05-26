import React from 'react';
import {
  Grid,
  Typography,
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core';
import Navbar from './Navbar';
import SearchBox from './SearchBox';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
    },
    container: {
      padding: '2.75rem',
      paddingBottom: 0,
      background: 'linear-gradient(91.7deg, #43CEA2 0.44%, #185A9D 98.43%)',
      height: '31.75rem',
    },
    lead: {
      marginTop: '4.25rem',
      marginBottom: '6.25rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    leadTitle: {
      fontWeight: 500,
      fontFamily: 'Alegreya',
      color: '#fff',
    },
    leadText: {
      fontFamily: 'Lato',
      marginTop: '0.9375rem',
      fontSize: '1.0254rem',
    },
    searchBox: {
    }
  })
);

interface Props {}
const Header: React.FC<Props> = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container className={classes.container}>
        <Grid item xs={12}>
          <Navbar />
        </Grid>
        <Grid item xs={12} className={classes.lead}>
          <Typography variant='h5' className={classes.leadTitle}>
            Find someone you can trust.
          </Typography>
          <Typography variant='body1' className={classes.leadText}>
            Our vendors are honest. 100% cash back guaranteed if service
            rendered is not acceptable.
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.searchBox}>
          <SearchBox />
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;

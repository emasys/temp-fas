import React from 'react';
import {
  Grid,
  Typography,
  createStyles,
  makeStyles,
  Theme,
  Button,
} from '@material-ui/core';
import next from '../assets/next.svg';
import Divider from './Divider';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: '0 1.25rem',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    title: {
      color: '#5C5C5C',
      fontWeight: 500,
      fontSize: '1.6875rem',
    },
    button: {
      color: '#A9A9A9',
      minHeight: '2.5rem',
      fontSize: '1.1411rem',
    },
    divider: {
      height: 2,
      background: '#F6F6F6',
      borderRadius: 10,
    },
    dividerInner: {
      height: 2,
      background: '#000',
      width: '21.3125rem',
      borderRadius: 10,
    },
    icon: {
      marginLeft: '.5rem',
      marginTop: '.26rem',
    },
  })
);

interface Props {}
const Services: React.FC<Props> = (props) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} className={classes.header}>
        <Typography variant='body2' className={classes.title}>
          Popular services
        </Typography>
        <Button variant='text' className={classes.button}>
          View all services{' '}
          <img alt='next' src={next} className={classes.icon} />
        </Button>
      </Grid>
      <Divider />
      <Grid item xs={12}>
        
      </Grid>
    </Grid>
  );
};

export default Services;

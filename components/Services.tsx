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
import Card from './Card';
import { AppState } from '../lib/initialState';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      marginBottom: '5rem',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '0 1.25rem',
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
      padding: '0 1.25rem',
    },
    icon: {
      marginLeft: '.5rem',
      marginTop: '.26rem',
    },
    cardWrapper: {
      marginTop: '3.25rem',
      paddingLeft: '1.25rem',
      display: 'flex',
      maxWidth: '100%',
      height: '30rem',
      overflow: 'scroll',
      '-ms-overflow-style': 'none',
      '&::-webkit-scrollbar': {
        display: 'none',
      },
    },
  })
);

interface Props {}
const Services: React.FC<Props> = (props) => {
  const services = useSelector(
    (state: AppState) => state.services.popularServices
  );
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} className={classes.divider}>
        <Divider title="Popular services" buttonText="View all services" />
      </Grid>
      <Grid item xs={12} className={classes.cardWrapper}>
        {services.map((service) => (
          <Card key={service.id} id={service.id} name={service.name} />
        ))}
      </Grid>
    </Grid>
  );
};

export default Services;

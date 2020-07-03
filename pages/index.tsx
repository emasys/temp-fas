import React, { useEffect } from 'react';
import Header from '../components/Header';
import { instance } from '../config/axiosConfig';
import { GetStaticProps } from 'next';
import Services from '../components/Services';
import { createStyles, makeStyles, Theme, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { saveServices } from '../redux/actions/services';
import { fetchServices, fetchLocations } from '../api';
import { IService, ILocation } from '../interfaces';
import { saveLocations } from '../redux/actions/locations';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
    },
  })
);

interface Props {
  services: IService[];
  locations: ILocation[];
}
const Home: React.FC<Props> = ({ services, locations }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(saveServices(services));
    dispatch(saveLocations(locations))
  }, []);
  return (
    <Grid container className={classes.container}>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={12}>
        <Services />
      </Grid>
    </Grid>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const services = await fetchServices();
  const locations = await fetchLocations();
  return {
    props: {
      services,
      locations,
    },
  };
};
export default Home;

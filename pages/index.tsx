import React, { useEffect } from 'react';
import { GetStaticProps } from 'next';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { saveServices } from '../redux/actions/services';
import { fetchServices, fetchLocations } from '../api';
import { IService, ILocation } from '../interfaces';
import { saveLocations } from '../redux/actions/locations';
import Navbar from '../components/Navbar';
import SearchBox from '../components/SearchBox';
import bg from '../assets/bg-pattern.svg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
      background: 'linear-gradient(91.7deg, #43CEA2 0.44%, #185A9D 155%)',
      height: '100vh',
      width: '100vw',
      padding: '3% 4%',
      [theme.breakpoints.down('xs')]: {
        padding: '10% 5%',
      },
      [theme.breakpoints.down('sm')]: {
        padding: '5%',
      },
      '&:before': {
        content: '""',
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        height: 'auto',
        minHeight: '100vh',
        width: '100%',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
      },
    },
    searchBox: {
      margin: 'auto 0',
      width: '100%',
      display: 'flex',
      [theme.breakpoints.down('xs')]: {
        marginTop: '40%',
      },
    },
  }),
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
    dispatch(saveLocations(locations));
  }, []);
  return (
    <div className={classes.container}>
      <div style={{ zIndex: 22 }}>
        <Navbar />
      </div>
      <div className={classes.searchBox}>
        <SearchBox />
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
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

import React from 'react';
import Header from '../components/Header';
import { instance } from '../config/axiosConfig';
import { GetStaticProps } from 'next';
import Services from '../components/Services';
import { createStyles, makeStyles, Theme, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
    },
  })
);

interface Props {}
const Home: React.FC<Props> = (props) => {
  const classes = useStyles();
  console.log(props, '>>>>>');
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
  try {
    const url = 'services';
    const { data } = await instance.get(url);
    return {
      props: {
        services: data,
      },
    };
  } catch (error) {
    return {
      props: {
        services: [],
      },
    };
  }
};
export default Home;

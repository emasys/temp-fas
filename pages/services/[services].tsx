import React, { useEffect } from 'react';
import Header from '../../components/Header';
import { instance } from '../../config/axiosConfig';
import { GetStaticProps } from 'next';
import Services from '../../components/Services';
import { createStyles, makeStyles, Theme, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { saveServices } from '../../redux/actions/services';
import Navbar from '../../components/Navbar';
import VendorLayout from '../../components/VendorLayout';
import MenuBar from '../../components/MenuBar';
import Divider from '../../components/Divider';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
    },
    menu: {
      padding: '1.5rem 0 2.5rem'
    }
  })
);

interface Props {
}
const Vendors: React.FC<Props> = () => {
  const classes = useStyles();
  const router = useRouter();
  console.log(router, '======');
  return (
    <VendorLayout>
      <Grid container className={classes.container}>
        <Grid item xs={12} className={classes.menu}>
          <MenuBar />
        </Grid>
        <Grid item xs={12}>
          <Divider title="Nearest to you" buttonText="view all 33" />
        </Grid>
      </Grid>
    </VendorLayout>
  );
};

export default Vendors;

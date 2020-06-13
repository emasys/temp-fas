import React, { useEffect } from 'react';
import Header from '../../components/Header';
import { instance } from '../../config/axiosConfig';
import { GetStaticProps } from 'next';
import Services from '../../components/Services';
import { createStyles, makeStyles, Theme, Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { setValue } from '../../redux/actions/common';
import Navbar from '../../components/Navbar';
import VendorLayout from '../../components/VendorLayout';
import MenuBar from '../../components/MenuBar';
import Divider from '../../components/Divider';
import { AppState } from '../../lib/initialState';
import VendorCard from '../../components/VendorCard';
import { IService, IVendor } from '../../interfaces';
import { EActionTypes } from '../../redux/actions/types';
import VendorBanner from '../../components/VendorBanner';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
    },
    menu: {
      padding: '1.5rem 0 2.5rem',
    },
    vendorWrapper: {
      display: 'flex',
      flexDirection: 'row',
      marginTop: '2rem',
      flexWrap: 'wrap',
    },
    vendor: {},
  })
);

interface Props {}
const Vendors: React.FC<Props> = (props) => {
  const classes = useStyles();
  const { query } = useRouter();
  const { rate, phoneNumber } = useSelector((state: AppState) =>
    state.vendor.find((vendor) => vendor.id === query.id)
  );
  console.log(rate);
  return (
    <VendorLayout title={'Vendors'}>
      <Grid container className={classes.container}>
        <Grid item xs={12}>
          <VendorBanner rate={rate} phone={phoneNumber} />
        </Grid>
        {/* <Grid item xs={12}>
          <Divider title='Nearest to you' buttonText='view all 33' />
        </Grid> */}
      </Grid>
    </VendorLayout>
  );
};

export default Vendors;

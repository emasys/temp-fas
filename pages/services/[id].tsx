import React, { useEffect } from 'react';
import Header from '../../components/Header';
import { instance } from '../../config/axiosConfig';
import { GetStaticProps } from 'next';
import Services from '../../components/Services';
import { createStyles, makeStyles, Theme, Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { saveServices } from '../../redux/actions/services';
import Navbar from '../../components/Navbar';
import VendorLayout from '../../components/VendorLayout';
import MenuBar from '../../components/MenuBar';
import Divider from '../../components/Divider';
import { AppState } from '../../lib/initialState';
import VendorCard from '../../components/VendorCard';
import { IService, IVendor } from '../../interfaces';

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

interface Props {
  vendors: IVendor[];
}
const Vendors: React.FC<Props> = ({ vendors }) => {
  const classes = useStyles();
  return (
    <VendorLayout>
      <Grid container className={classes.container}>
        <Grid item xs={12} className={classes.menu}>
          <MenuBar />
        </Grid>
        <Grid item xs={12}>
          <Divider title='Nearest to you' buttonText='view all 33' />
        </Grid>
        <Grid container spacing={5} className={classes.vendorWrapper}>
          {vendors.map((vendor) => (
            <Grid item key={vendor.id} xs={12} sm={4} className={classes.vendor}>
              <VendorCard  name={vendor.name} rate={vendor.rate} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </VendorLayout>
  );
};

export async function getStaticPaths() {
  try {
    const url = 'services';
    const { data } = await instance.get(url);
    const paths = data.map((service: IService) => ({
      params: { id: service.id },
    }));
    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    return { paths: [{ params: { id: '' } }], fallback: false };
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const url = `services/${params.id}/vendors`;
    const { data } = await instance.get(url);
    console.log(data);
    return {
      props: {
        vendors: data,
      },
    };
  } catch (error) {
    return {
      props: {
        vendors: [],
      },
    };
  }
};

export default Vendors;

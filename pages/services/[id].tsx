/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { GetStaticProps } from 'next';
import { createStyles, makeStyles, Theme, Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import VendorLayout from '../../components/VendorLayout';
import MenuBar from '../../components/MenuBar';
import Divider from '../../components/Divider';
import { AppState } from '../../lib/initialState';
import VendorCard from '../../components/VendorCard';
import { IService, IVendor } from '../../interfaces';
import { fetchServices, fetchVendors } from '../../api';
import noResult from '../../assets/no-result.svg';

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
    noResult: {
      [theme.breakpoints.down('xs')]: {
        width: '100%',
      },
    },
  }),
);

interface Props {
  vendors: IVendor[];
}
const VendorServices: React.FC<Props> = () => {
  const classes = useStyles();
  const allVendors = useSelector(
    (state: AppState) => state.vendor.searchResult,
  );
  return (
    <VendorLayout title={'Vendors'} path={`/`}>
      <Grid container className={classes.container}>
        <Grid item xs={12} className={classes.menu}>
          <MenuBar />
        </Grid>
        <Grid item xs={12}>
          <Divider title="Vendors nearest to you" />
        </Grid>
        {allVendors && (
          <Grid container spacing={5} className={classes.vendorWrapper}>
            {!allVendors.length ? (
              <Grid
                item
                xs={12}
                style={{ display: 'flex', justifyContent: 'center' }}
              >
                <img
                  src={noResult}
                  alt="no result"
                  className={classes.noResult}
                />
              </Grid>
            ) : (
              allVendors.map((vendor) => (
                <Grid
                  item
                  key={vendor.id}
                  xs={12}
                  sm={4}
                  md={3}
                  className={classes.vendor}
                >
                  <VendorCard
                    name={vendor.name}
                    rate={vendor.rate}
                    id={vendor.id}
                    logo={vendor.logoUrl}
                  />
                </Grid>
              ))
            )}
          </Grid>
        )}
      </Grid>
    </VendorLayout>
  );
};

export async function getStaticPaths() {
  try {
    const data = await fetchServices();
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
    const data = await fetchVendors(params.id);
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

export default VendorServices;

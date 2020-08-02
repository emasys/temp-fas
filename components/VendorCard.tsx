import React, { useEffect } from 'react';
import {
  Grid,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import Router, { useRouter } from 'next/router';
import { formatMoney } from '../util';
import Link from 'next/link';
import bannerIcon from '../assets/banner.svg';
import { useSelector } from 'react-redux';
import { AppState } from '../lib/initialState';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: '100%',
      maxHeight: '18rem',
      overflow: 'hidden',
      cursor: 'pointer',
      paddingBottom: '1rem',
      borderRadius: '2px',
      '&:last-of-type': {
        marginRight: 0,
      },
    },
    title: {
      color: '#181818',
      fontSize: '1.25rem',
      textTransform: 'capitalize',
      fontFamily: 'Lato',
      fontWeight: 'bold',
      marginTop: '.2rem',
    },
    image: {
      width: '10rem',
      position: 'absolute',
      opacity: '.1',
      right: '1rem',
      bottom: '-2rem',
    },
    imageWrapper: {
      height: '12rem',
      width: '20rem',
      background: '#cac5dd',
      overflow: 'hidden',
      position: 'relative',
    },
    captions: {
      color: '#717171',
      fontSize: '0.725rem',
      lineHeight: '0.6rem',
      fontFamily: 'Lato',
      fontWeight: 'normal',
    },
    textWrapper: {
      padding: '0',
    },
    vendors: {
      position: 'absolute',
      right: '1rem',
      background: 'rgba(0, 0, 0, 0.2)',
      top: '1rem',
      color: '#fff',
      borderRadius: '0.125rem',
      fontWeight: 'bold',
      padding: '.3rem',
    },
    other: {
      color: '#181818',
      fontWeight: 'bold',
    },
  })
);

interface Props {
  name: string;
  rate: number;
  id: string;
}
const VendorCard: React.FC<Props> = ({ name, rate, id }) => {
  const classes = useStyles();
  const router = useRouter();
  const loading = useSelector((state: AppState) => state.common.loading);
  const handleClick = (e: any) => {
    e.preventDefault();
    router.push('/vendor/[id]', `/vendor/${id}`, {
      query: { serviceId: router.query.id },
    });
  };
  return (
    <Grid container className={classes.container} onClick={handleClick}>
      <Grid item xs={12} className={classes.imageWrapper}>
        {loading ? (
          <Skeleton
            animation='wave'
            variant='rect'
            width={'100%'}
            height={'100%'}
          />
        ) : (
          <>
            <Typography variant='caption' className={classes.vendors}>
              new
            </Typography>
            <img src={bannerIcon} alt='service-img' className={classes.image} />
          </>
        )}
      </Grid>
      <Grid item xs={12} className={classes.textWrapper}>
        {loading ? (
          <>
            <Skeleton animation='wave' />
            <Skeleton animation='wave' width={'30%'} />
          </>
        ) : (
          <>
            <Typography variant='body2' className={classes.title}>
              {name}
            </Typography>
            <Typography variant='caption' className={classes.captions}>
              {formatMoney(rate)}
            </Typography>
          </>
        )}
      </Grid>
    </Grid>
  );
};

export default VendorCard;

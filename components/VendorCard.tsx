import React, { useState } from 'react';
import {
  Grid,
  createStyles,
  makeStyles,
  Typography,
  Theme,
} from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import { useRouter } from 'next/router';
import { formatMoney, truncateString } from '../util';
import bannerIcon from '../assets/banner.svg';
import { useSelector } from 'react-redux';
import { AppState } from '../lib/initialState';
import clsx from 'clsx';

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

    image: {
      width: '10rem',
      position: 'absolute',
      opacity: '.1',
      right: '1rem',
      bottom: '-2rem',
    },
    '@keyframes animateImage': {
      // from: {
      //   backgroundSize: 'cover',
      // },
      // to: {
      //   backgroundSize: 'auto',
      // },
      '0%': { backgroundSize: '110% auto' },
      '80% ': { backgroundSize: '150% auto' },
      '100% ': { backgroundSize: '148% auto' },
    },
    animateImage: {
      transition: 'all 400ms',
      animationName: '$animateImage',
      animationDuration: '2s',
      animationDirection: 'normal',
      animationFillMode: 'forwards',
    },
    imageWrapper: {
      height: '12rem',
      width: '20rem',
      background: '#cac5dd',
      overflow: 'hidden',
      position: 'relative',
      transition: 'all 400ms',
      [theme.breakpoints.down('md')]: {
        height: '8rem',
      },
    },
    captions: {
      color: '#272727',
      fontSize: '0.725rem',
      lineHeight: '0.6rem',
      fontFamily: 'Lato',
      fontWeight: 'normal',
      transition: 'all 400ms',
    },
    title: {
      color: '#181818',
      fontSize: '1.25rem',
      textTransform: 'capitalize',
      fontFamily: 'Lato',
      fontWeight: 'bold',
      marginTop: '.2rem',
    },
    textWrapper: {
      padding: '0',
      height: '4rem',
    },
    divider: {
      marginTop: '.5rem',
      width: '100%',
      height: '1px',
      transition: 'all 400ms',
      background: 'linear-gradient(90.6deg, #43CEA2 0.44%, #185A9D 98.43%)',
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
  }),
);

interface Props {
  name: string;
  rate: number;
  id: string;
  logo: string;
}
const VendorCard: React.FC<Props> = ({ name, rate, id, logo }) => {
  const classes = useStyles();
  const router = useRouter();
  const [hover, setHover] = useState(false);
  const loading = useSelector((state: AppState) => state.common.loading);
  const handleClick = (e) => {
    e.preventDefault();
    router.push('/vendor/[id]', `/vendor/${id}`, {
      query: { serviceId: router.query.id },
    });
  };

  return (
    <Grid
      container
      className={classes.container}
      onClick={handleClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Grid
        item
        xs={12}
        className={clsx(
          hover ? classes.animateImage : '',
          classes.imageWrapper,
        )}
        style={{
          backgroundImage: `url(${loading ? '' : logo})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {loading ? (
          <Skeleton
            animation="wave"
            variant="rect"
            width={'100%'}
            height={'100%'}
          />
        ) : (
          <>
            <Typography variant="caption" className={classes.vendors}>
              new
            </Typography>
            {!logo && (
              <img
                src={bannerIcon}
                alt="service-img"
                className={classes.image}
              />
            )}
          </>
        )}
      </Grid>
      <Grid item xs={12} className={classes.textWrapper}>
        {loading ? (
          <>
            <Skeleton animation="wave" />
            <Skeleton animation="wave" width={'80%'} />
          </>
        ) : (
          <>
            <Typography variant="body2" title={name} className={classes.title}>
              {truncateString(name, 20)}
            </Typography>
            <Typography variant="caption" className={classes.captions}>
              Average rate of {formatMoney(rate)} per job
            </Typography>
            <div
              className={classes.divider}
              style={{ marginTop: hover ? '.5rem' : '4rem' }}
            />
          </>
        )}
      </Grid>
    </Grid>
  );
};

export default VendorCard;

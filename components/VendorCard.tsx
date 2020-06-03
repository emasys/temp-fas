import React from 'react';
import {
  Grid,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import { useRouter } from 'next/router';
import Furniture from '../assets/furniture.svg';
import { formatMoney } from '../util';

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
      marginTop: '.2rem'
    },
    image: {
      width: '100%',
    },
    imageWrapper: {
      maxHeight: '12rem',
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
}
const VendorCard: React.FC<Props> = ({ name, rate }) => {
  const classes = useStyles();
  const router = useRouter();
  const handleClick = (e: any) => {
    e.preventDefault();
    // router.push(`/vendor/${name}`);
  };
  return (
    <Grid container className={classes.container} onClick={handleClick}>
      <Grid item xs={12} className={classes.imageWrapper}>
        <Typography variant='caption' className={classes.vendors}>
          new
        </Typography>
        <img src={Furniture} alt='service-img' className={classes.image} />
      </Grid>
      <Grid item xs={12} className={classes.textWrapper}>
        <Typography variant='body2' className={classes.title}>
          {name}
        </Typography>
        <Typography variant='caption' className={classes.captions}>
          {formatMoney(rate)}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default VendorCard;

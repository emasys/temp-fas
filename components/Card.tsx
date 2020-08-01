import React from 'react';
import {
  Grid,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import { useRouter } from 'next/router';
import bannerIcon from '../assets/banner.svg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      maxWidth: '20rem',
      minWidth: '20rem',
      height: '15rem',
      overflow: 'hidden',
      cursor: 'pointer',
      paddingBottom: '1rem',
      borderRadius: '2px',
      marginRight: '3.125rem',
      transition: '400ms',
      '&:last-of-type': {
        marginRight: 0,
      },
      '&:hover': {
        transition: '400ms',
        borderBottom: '1px solid #F6F6F6',
      },
    },
    title: {
      color: '#181818',
      fontSize: '1.25rem',
      textTransform: 'capitalize',
      fontFamily: 'Lato',
      fontWeight: 'bold',
    },
    image: {
      width: '10rem',
      position: 'absolute',
      opacity: '.1',
      right: '1rem',
      bottom: '-2rem'
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
    },
    textWrapper: {
      // padding: '0 0.9375rem',
    },
    vendors: {
      position: 'absolute',
      right: '1rem',
      background: 'rgba(67, 206, 162, 0.96)',
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
  id: string;
}
const Card: React.FC<Props> = ({ name, id }) => {
  const classes = useStyles();
  const router = useRouter();
  const handleClick = (e: any) => {
    e.preventDefault();
    router.push('/services/[id]', `/services/${id}`);
  };
  return (
    <Grid container className={classes.container} onClick={handleClick}>
      <Grid item xs={12} className={classes.imageWrapper}>
        <img src={bannerIcon} alt='service-img' className={classes.image} />
      </Grid>
      <Grid item xs={12} className={classes.textWrapper}>
        <Typography variant='body2' className={classes.title}>
          {name}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Card;

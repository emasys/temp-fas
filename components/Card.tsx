import React from 'react';
import {
  Grid,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import Furniture from '../assets/furniture.svg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      maxWidth: '20rem',
      minWidth: '20rem',
      maxHeight: '18rem',
      overflow: 'hidden',
      cursor: 'pointer',
      paddingBottom: '1rem',
      borderRadius: '2px',
      marginRight: '3.125rem',
      boxShadow: '0px 3px 15px 1px rgba(0, 0, 0, 0.11)',
      '&:last-of-type': {
        marginRight: 0,
      },
    },
    title: {
      color: '#181818',
      fontSize: '1.25rem',
      textTransform: 'capitalize'
    },
    image: {
      width: '20rem',
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
    },
    textWrapper: {
      padding: '0 0.9375rem',
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
}
const Card: React.FC<Props> = ({ name }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} className={classes.imageWrapper}>
        <Typography variant='caption' className={classes.vendors}>
          100k vendors
        </Typography>
        <img src={Furniture} alt='service-img' className={classes.image} />
      </Grid>
      <Grid item xs={12} className={classes.textWrapper}>
        <Typography variant='body2' className={classes.title}>
          {name}
        </Typography>
        <Typography variant='caption' className={classes.captions}>
          <span className={classes.other}>Related services:</span> formwork,
          roofing and structural work, joister, trim carpenter, furniture,
          wardrobes, ship carpenter, framer, etc.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Card;

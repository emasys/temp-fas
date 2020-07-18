import React from 'react';
import {
  Grid,
  Typography,
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core';
import Navbar from './Navbar';
import SearchBox from './SearchBox';
import bubble from '../assets/bubble.svg';
import openQ from '../assets/open-q.svg';
import closeQ from '../assets/close-q.svg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    container: {
      display: 'flex',
      flexDirection: 'column',
      padding: '3.1875rem 2.5rem',
      background: '#F8FBFC',
      height: '20rem',
      borderRadius: '.2rem',
      maxWidth: '25rem',
      [theme.breakpoints.down('sm')]: {},
    },
    chat: {
      background: 'rgba(67, 206, 162, .05)',
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '2.75rem',
      width: '2.75rem',
    },
    text: {
      fontSize: '2.375rem',
      color: '#A9A9A9',
      display: 'flex',
      alignSelf: 'center',
      marginTop: '3rem',
      '&::before': {
        content: `url(${openQ})`,
        display: 'block',
        height: 60,
        marginTop: -27,
        marginRight: '1rem'
      },
      '&::after': {
        content: `url(${closeQ})`,
        display: 'block',
        height: 60,
        marginTop: 35,
        marginLeft: '1rem'
      }
    },
  })
);

interface Props {}
const Reviews: React.FC<Props> = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.chat}>
        <img src={bubble} alt='bubble' />
      </div>
      <Typography variant='body2' className={classes.text}>
        No review yet
      </Typography>
    </div>
  );
};

export default Reviews;

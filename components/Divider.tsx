import React from 'react';
import {
  Grid,
  createStyles,
  makeStyles,
  Theme,
  Typography,
  Button,
} from '@material-ui/core';
import next from '../assets/next.svg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    divider: {
      height: 2,
      background: '#F6F6F6',
      borderRadius: 10,
    },
    dividerInner: {
      height: 2,
      background: '#000',
      width: '21.3125rem',
      borderRadius: 10,
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: 0,
      [theme.breakpoints.down('xs')]: {
        alignItems: 'center'
      },
    },
    title: {
      color: '#5C5C5C',
      fontWeight: 500,
      fontSize: '1.5rem',
      marginBottom: '.5rem',
      [theme.breakpoints.down('xs')]: {
        fontSize: '1rem',
        margin: 0
      },
    },
    button: {
      color: '#A9A9A9',
      minHeight: '2.5rem',
      fontSize: '1.1411rem',
      [theme.breakpoints.down('xs')]: {
        fontSize: '.8rem',
        minWidth: '2rem',
        padding: 0
      },
    },
    icon: {
      marginLeft: '.5rem',
    },
  })
);

interface Props {
  title: string;
  buttonText?: string;
}
const Divider: React.FC<Props> = ({ title, buttonText }) => {
  const classes = useStyles();
  return (
    <>
      <Grid item xs={12} className={classes.header}>
        <Typography variant='body2' className={classes.title}>
          {title}
        </Typography>
        {buttonText && (
          <Button variant='text' className={classes.button}>
            {buttonText} <img alt='next' src={next} className={classes.icon} />
          </Button>
        )}
      </Grid>
      <Grid item xs={12} className={classes.divider}>
        <div className={classes.dividerInner} />
      </Grid>
    </>
  );
};

export default Divider;

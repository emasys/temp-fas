import React, { useState } from 'react';
import { Grid, Typography, IconButton } from '@material-ui/core';
import Router, { useRouter } from 'next/router';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clx from 'clsx';
import back from '../assets/back-arrow.svg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      height: '2rem',
      width: '2rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-end',
      cursor: 'pointer',
      padding: '0.25rem',
    },
    line: {
      height: '0.25rem',
      width: '1.7356rem',
      borderRadius: '0.125rem',
      background: '#c1c1c1',
      transition: 'all 0.2s ease',
    },
    lineTop: {
      transform: (props: any) => (props.open ? 'rotate(45deg)' : 'none'),
      transformOrigin: 'top left',
      marginBottom: '0.4rem',
    },
    lineMiddle: {
      width: '2.125rem',
      opacity: (props: any) => (props.open ? 0 : 1),
      transform: (props: any) => (props.open ? 'translateX(-16px)' : 'none'),
    },
    lineBottom: {
      transform: (props: any) =>
        props.open ? 'translateX(-1px) rotate(-45deg)' : 'none',
      transformOrigin: 'top left',
      marginTop: '0.4rem',
    },
    title: {
      color: '#949494',
      fontWeight: 500,
      fontSize: '1.2rem',
      textDecoration: 'none',
      cursor: 'pointer',
      display: 'flex',

      alignItems: 'center'
    },
    menuWrapper: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    root: {
      display: 'flex',
      justifyContent: 'space-between',
      background: '#fff',
      alignItems: 'center',
      padding: '1.25rem 0',
    },
  })
);

interface Props {
  prevPageTitle: string;
  path: string;
}
const Navbar: React.FC<Props> = ({ prevPageTitle, path }) => {
  const [status, setStatus] = useState(false);
  const classes = useStyles({ open: status });
  const handleClick = (e: any) => {
    e.preventDefault();
    setStatus(!status);
  };
  const goBack = (e: any) => {
    e.preventDefault();
    Router.push(path);
  };
  return (
    <Grid container justify='space-between' className={classes.root}>
      <Grid item sm={3}>
        <Typography variant='body1' className={classes.title} onClick={goBack}>
          <IconButton>
            <img src={back} alt='back' />
          </IconButton>{' '}
          {prevPageTitle}
        </Typography>
      </Grid>
      <Grid item sm={8} md={6} lg={4} className={classes.menuWrapper}>
        <div className={classes.container} onClick={handleClick}>
          <div className={clx(classes.line, classes.lineTop)} />
          <div className={clx(classes.line, classes.lineMiddle)} />
          <div className={clx(classes.line, classes.lineBottom)} />
        </div>
      </Grid>
    </Grid>
  );
};

export default Navbar;

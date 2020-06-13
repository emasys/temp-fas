import React, { ReactElement, useEffect } from 'react';
import {
  createStyles,
  makeStyles,
  Theme,
  Grid,
  Typography,
  Button,
} from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import config from '../config';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { fetchInstagramMedia } from '../redux/actions/socialMedia';
import { saveURI } from '../redux/actions/common';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      minHeight: '2.125rem',
      borderRadius: '1.75rem',
    },
    connectWrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50%',
      padding: '2rem',
      border: '1px solid rgba(0, 0, 0, 0.23)',
      width: '18rem',
      height: '18rem',
      marginTop: '2rem',
    },
    instaIcon: {
      fontSize: '5rem',
      fontWeight: 100,
      color: 'rgba(0, 0, 0, 0.23)',
      marginBottom: '1rem',
    },
  })
);
interface Props {}

export default function InstagramWidget({}: Props): ReactElement {
  const classes = useStyles();
  const router = useRouter();
  const dispatch = useDispatch();
  const handleInstagram = (response: any) => {
    console.log(response);
  };
  console.log(router, '=====');
  useEffect(() => {
    if (router.query?.code) {
      //   dispatch(fetchInstagramMedia(router.query.code));
      //   router.push(router.asPath);
    }
  }, [router.query]);
  const onBtnClick = () => {
    dispatch(saveURI(router.asPath));
    const { client_id, redirectUri } = config.instagram;
    window.location.href = `https://api.instagram.com/oauth/authorize/?app_id=${client_id}&redirect_uri=${redirectUri}&scope=user_profile,user_media&response_type=code`;
  };

  return (
    <div className={classes.connectWrapper}>
      <InstagramIcon className={classes.instaIcon} />
      <Button
        variant='contained'
        className={classes.button}
        onClick={onBtnClick}
      >
        Connect instagram
      </Button>
    </div>
  );
}

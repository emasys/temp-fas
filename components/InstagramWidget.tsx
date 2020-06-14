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
import { useDispatch, useSelector } from 'react-redux';
import { fetchInstagramMedia } from '../redux/actions/socialMedia';
import { saveURI } from '../redux/actions/common';
import { AppState } from '../lib/initialState';

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
    feedImg: {
      height: '14.375rem',
      width: '100%',
      borderRadius: '.2rem',
    },
    pagination: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    pagBtn: {
      minHeight: '2.125rem',
      borderRadius: '.2rem',
      color: '#5C5C5C',
    },
  })
);
interface Props {
  instagramCode: null | string;
}

export default function InstagramWidget({
  instagramCode,
}: Props): ReactElement {
  const classes = useStyles();
  const router = useRouter();
  const dispatch = useDispatch();
  const { data, next, prev } = useSelector(
    (state: AppState) => state.socialMedia
  );
  const handlePagination = (direction: string) => {
    dispatch(fetchInstagramMedia(instagramCode, direction));
  };
  useEffect(() => {
      dispatch(fetchInstagramMedia(instagramCode));
  }, [instagramCode]);
  const onBtnClick = () => {
    dispatch(saveURI(router.asPath));
    const { client_id, redirectUri } = config.instagram;
    window.location.href = `https://api.instagram.com/oauth/authorize/?app_id=${client_id}&redirect_uri=${redirectUri}&scope=user_profile,user_media&response_type=code`;
  };

  if (!data.length) {
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
  return (
    <Grid container spacing={3}>
      {data.map(({ media_url, id }) => (
        <Grid key={id} item sm={3} xl={2}>
          <img
            src={media_url}
            alt='instagram feed'
            className={classes.feedImg}
          />
        </Grid>
      ))}
      <Grid item xs={12} className={classes.pagination}>
        <Button
          variant='outlined'
          className={classes.pagBtn}
          disabled={!prev}
          onClick={() => handlePagination(`before=${prev}`)}
        >
          Previous
        </Button>
        <Button
          variant='outlined'
          className={classes.pagBtn}
          disabled={!next}
          onClick={() => handlePagination(`after=${next}`)}
        >
          Next
        </Button>
      </Grid>
    </Grid>
  );
}

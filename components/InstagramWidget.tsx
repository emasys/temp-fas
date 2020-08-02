import React, { ReactElement, useEffect } from 'react';
import {
  createStyles,
  makeStyles,
  Theme,
  Grid,
  Typography,
  Button,
  IconButton,
} from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import config from '../config';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { fetchInstagramMedia } from '../redux/actions/socialMedia';
import { saveURI, handleAuthModal } from '../redux/actions/common';
import { AppState } from '../lib/initialState';
import plus from '../assets/plus.svg';
import { getVendorStatus } from '../redux/selectors/vendors';

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
      padding: '2rem',
      borderRadius: '.2rem',
      background: '#F8F8F8',
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
    add: {
      borderRadius: '50%',
      background: 'rgba(67, 206, 162, 0.19)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '6.125rem',
      height: '6.125rem',
    },
    addIcon: {},
  })
);
interface Props {
  instagramCode: null | string;
  vendorId: string;
}

export default function InstagramWidget({
  instagramCode,
  vendorId,
}: Props): ReactElement {
  const classes = useStyles();
  const router = useRouter();
  const dispatch = useDispatch();
  const { data, next, prev } = useSelector(
    (state: AppState) => state.socialMedia
  );
  const auth = useSelector((state: AppState) => state.auth);
  const ownVendor = useSelector((state: AppState) =>
    getVendorStatus(state)
  );

  const handlePagination = (direction: string) => {
    dispatch(fetchInstagramMedia(instagramCode, direction));
  };
  useEffect(() => {
    dispatch(fetchInstagramMedia(instagramCode));
  }, [instagramCode]);
  const onBtnClick = () => {
    if (!auth.auth) {
      return dispatch(handleAuthModal(true));
    }
    dispatch(saveURI(router.asPath));
    const { client_id, redirectUri } = config.instagram;
    window.location.href = `https://api.instagram.com/oauth/authorize/?app_id=${client_id}&redirect_uri=${redirectUri}&scope=user_profile,user_media&response_type=code`;
  };

  if (!data.length) {
    return (
      <div className={classes.connectWrapper}>
        <div className={classes.add}>
          {/* {ownVendor?.id === vendorId && (
            <IconButton onClick={onBtnClick}>
              <img src={plus} alt='add' className={classes.addIcon} />
            </IconButton>
          )} */}
        </div>
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

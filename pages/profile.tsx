import React, { ReactElement, useEffect } from 'react';
import VendorLayout from '../components/VendorLayout';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../lib/initialState';
import { handleAuthModal } from '../redux/actions/common';
import { makeStyles, Theme, createStyles } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {},
    blur: {
      '-webkit-filter': 'blur(1rem)',
      '-moz-filter': 'blur(1rem)',
      '-o-filter': 'blur(1rem)',
      '-ms-filter': 'blur(1rem)',
      filter: 'blur(1rem)',
    },
  })
);

interface Props {}

export default function Profile({}: Props): ReactElement {
  const classes = useStyles();
  const { auth } = useSelector((state: AppState) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!auth) {
      dispatch(handleAuthModal(true));
    }
  }, [auth]);

  return (
    <div className={auth ? classes.container : classes.blur}>
      <VendorLayout title={'Profile'}>
        <div>
          <h1>Profile</h1>
        </div>
      </VendorLayout>
    </div>
  );
}

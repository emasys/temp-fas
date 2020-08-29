/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import {
  Grid,
  createStyles,
  makeStyles,
  Theme,
  Typography,
  IconButton,
} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { EditRounded } from '@material-ui/icons';
import { AppState } from '../lib/initialState';
import UserInfoForm from './UserInfoForm';
import { profileImagUpload } from '../api';
import { updateUser } from '../redux/actions/auth';
import UploadModal from './UploadModal';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: '3rem',
      [theme.breakpoints.down('sm')]: {
        padding: '1rem',
      },
    },
    imageWrapper: {
      borderRadius: '50%',
      background: 'rgba(255, 133, 21, 0.1)',
      width: '13rem',
      position: 'relative',
      height: '13rem',
      marginBottom: '1rem',
    },
    cropWrapper: {
      background: '#fff',
      zIndex: 20,
      width: '100%',
      position: 'relative',
      height: '13rem',
      marginBottom: '1rem',
    },
    cropBtn: {
      minHeight: '1.8rem',
    },
    imageContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      [theme.breakpoints.down('sm')]: {
        marginBottom: '1.5rem',
      },
    },
    edit: {
      position: 'absolute',
      background: '#FF8515',
      padding: '.5rem',
      bottom: '.5rem',
      right: '1rem',
      '&:hover': {
        background: '#FF8514',
      },
    },
    editIcon: {
      color: '#fff',
      fontSize: '1rem',
    },
    input: {
      display: 'none',
    },
    textHeader: {
      marginBottom: '1rem',
      borderBottom: '1px solid #00000038',
      paddingBottom: '.25rem',
      fontWeight: 100,
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
  }),
);

const cropConfig = {
  unit: '%',
  width: 50,
  height: 50,
  x: 25,
  y: 25,
  aspect: 1 / 1,
};

const UserInfo: React.FC = () => {
  const classes = useStyles();
  const user = useSelector((state: AppState) => state.user);
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [upImg, setUpImg] = useState<any>();

  const handleUpload = async (file: string) => {
    const data = await profileImagUpload({ profileImage: file });
    if (data) dispatch(updateUser(data));
    return data;
  };

  const onSelectFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      setOpen(true);
      reader.addEventListener('load', () => setUpImg(reader.result));
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <Grid container className={classes.container}>
      <Grid item xs={12}>
        <Typography variant="h5" className={classes.textHeader}>
          Personal info
        </Typography>
      </Grid>
      <Grid item xs={12} lg={3} className={classes.imageContainer}>
        <div
          className={classes.imageWrapper}
          style={{
            backgroundImage: `url(${user.profileImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        >
          <UploadModal
            open={open}
            setStatus={setOpen}
            cropConfig={cropConfig}
            upImg={upImg}
            uploadAPI={handleUpload}
          />
          <input
            accept="image/*"
            value=""
            className={classes.input}
            id="dp-upload"
            onChange={onSelectFile}
            type="file"
          />
          <label htmlFor="dp-upload">
            <IconButton
              className={classes.edit}
              aria-label="upload picture"
              component="span"
            >
              <EditRounded className={classes.editIcon} />
            </IconButton>
          </label>
        </div>
        <Typography variant="body2">{user.fullName}</Typography>
      </Grid>
      <Grid item xs={12} lg={6}>
        <div>
          <UserInfoForm />
        </div>
      </Grid>
    </Grid>
  );
};

export default UserInfo;

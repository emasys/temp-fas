import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import {
  Grid,
  createStyles,
  makeStyles,
  Theme,
  Typography,
  Modal,
  TextField,
  Button,
} from '@material-ui/core';
import { useRouter } from 'next/router';
import Furniture from '../assets/furniture.svg';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/actions/auth';
import { AppState } from '../lib/initialState';
import { setValue, handleAuthModal } from '../redux/actions/common';
import { EActionTypes } from '../redux/actions/types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      display: 'flex',
      flexDirection: 'column',
      position: 'absolute',
      width: '27rem',
      padding: '3rem 5rem',
      backgroundColor: '#fff',
      top: '20%',
      left: 0,
      right: 0,
      margin: 'auto',
      outline: 'none',
    },
    button: {
      marginTop: '2rem',
      borderRadius: '2rem',
    },
    inputBox: {
      margin: '.5rem 0',
    },
  })
);

interface Props {}
const Login: React.FC<Props> = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const open = useSelector((state: AppState) => state.common.openAuthModal);
  const {
    handleChange,
    values,
    handleSubmit,
    isSubmitting,
    setSubmitting,
  } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values, { setSubmitting }) => {
      dispatch(login(values));
      setSubmitting(open);
    },
  });
  useEffect(() => {
    setSubmitting(false);
  }, [open]);

  return (
    <Modal
      open={open}
      onClose={() => dispatch(handleAuthModal(false))}
      aria-labelledby='login-modal'
      aria-describedby='login-modal'
    >
      <div className={classes.paper}>
        <TextField
          error={false}
          onChange={handleChange}
          value={values.email}
          className={classes.inputBox}
          name='email'
          id='filled-error-helper-text'
          label='Email'
          helperText=''
        />
        <TextField
          error={false}
          className={classes.inputBox}
          id='filled-error-helper-text'
          label='Password'
          name='password'
          onChange={handleChange}
          value={values.password}
          helperText=''
        />
        <Button
          onClick={() => handleSubmit()}
          className={classes.button}
          disabled={isSubmitting}
          variant='contained'
        >
          Login
        </Button>
      </div>
    </Modal>
  );
};

export default Login;

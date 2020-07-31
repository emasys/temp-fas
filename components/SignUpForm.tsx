import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Grid,
  createStyles,
  makeStyles,
  Theme,
  Typography,
  Modal,
  TextField,
  Button,
  Divider,
  IconButton,
} from '@material-ui/core';
import { useRouter } from 'next/router';
import Furniture from '../assets/furniture.svg';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/actions/auth';
import { AppState } from '../lib/initialState';
import {
  setValue,
  handleAuthModal,
  toggleModal,
} from '../redux/actions/common';
import { EActionTypes } from '../redux/actions/types';
import { loginAPI, signUpAPI } from '../api';
import { ArrowBackIosRounded, CloseRounded } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      display: 'flex',
      flexDirection: 'column',
      position: 'absolute',
      width: '25rem',
      backgroundColor: '#fff',
      top: '20%',
      left: 0,
      borderRadius: '.2rem',
      right: 0,
      margin: 'auto',
      outline: 'none',
      maxHeight: '95vh',
      overflow: 'auto',
      [theme.breakpoints.down('xs')]: {
        width: '100%',
        maxWidth: '100%',
        overflowX: 'hidden',
        minHeight: '100%',
        top: '30%',
      },
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '100%',
      borderRadius: '.2rem',
      padding: '3rem',
      paddingTop: 0,
      backgroundColor: '#fff',
      [theme.breakpoints.down('xs')]: {
        padding: '3rem 1rem',
      },
    },
    button: {
      marginTop: '2rem',
      borderRadius: '2rem',
    },
    inputBox: {
      margin: '.5rem 0',
    },
    inputRoot: {
      backgroundColor: '#fff',
    },
    title: {
      fontFamily: 'Alegreya',
      fontSize: '1.4rem',
      color: '#636363',
      textAlign: 'center',
    },
    subtitle: {
      marginBottom: '.5rem',
      marginTop: '0',
      fontSize: '.9rem',
      color: '#636363',
      textAlign: 'center',
    },
    footer: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      paddingBottom: '2rem',
    },
    divider: {
      height: '1px',
      width: '100%',
      marginBottom: '1.5rem',
      background: 'rgba(196, 196, 196, .2)',
    },
    signIn: {
      cursor: 'pointer',
      color: '#43CEA2',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    backBtn: {
      fontSize: '1.3rem',
    },
  })
);

let validationSchema = Yup.object().shape({
  email: Yup.string().email().required(),
});

interface Props {}
const SignUpForm: React.FC<Props> = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const open = useSelector((state: AppState) => state.common.openAuthModal);
  const {
    handleChange,
    values,
    errors,
    handleSubmit,
    isValid,
    isSubmitting,
    setSubmitting,
  } = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      const data = await signUpAPI(values);
      setSubmitting(true);
      if (!data) {
        setSubmitting(false);
        return setErrors({
          email: 'Email already exist',
        });
      }
      dispatch(setValue(EActionTypes.SAVE_EMAIL, values.email));
      dispatch(toggleModal('code'));
      setSubmitting(false);
    },
  });
  useEffect(() => {
    setSubmitting(false);
  }, [open]);

  const handleSignIn = () => {
    dispatch(toggleModal('login'));
  };

  const handleClose = () => {
    dispatch(handleAuthModal(false));
  };

  return (
    <div className={classes.paper}>
      <div className={classes.header}>
        <IconButton onClick={handleSignIn}>
          <ArrowBackIosRounded className={classes.backBtn} />
        </IconButton>
        <Typography variant='body1' className={classes.title}>
          Create an account
        </Typography>
        <IconButton onClick={handleClose}>
          <CloseRounded />
        </IconButton>
      </div>
      <div className={classes.form}>
        <Typography variant='body2' className={classes.subtitle}>
          Provide a valid email address to continue your registration process
        </Typography>
        <TextField
          error={!!errors.email}
          classes={{
            root: classes.inputRoot,
          }}
          variant='standard'
          onChange={handleChange}
          value={values.email}
          className={classes.inputBox}
          name='email'
          id='filled-error-helper-text'
          label='Email'
          helperText={errors.email}
        />
        <Button
          onClick={() => handleSubmit()}
          className={classes.button}
          disabled={isSubmitting || !isValid}
          variant='contained'
        >
          Continue
        </Button>
      </div>
      <div className={classes.footer}>
        <div className={classes.divider} />
        <Typography variant='body2'>
          Already have an account?{' '}
          <span className={classes.signIn} onClick={handleSignIn}>
            Sign in
          </span>
        </Typography>
      </div>
    </div>
  );
};

export default SignUpForm;

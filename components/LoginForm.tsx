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
import { loginAPI } from '../api';
import PasswordInput from './PasswordField';

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
        top: '10%',
      },
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '100%',
      padding: '3rem',
      backgroundColor: '#fff',
      [theme.breakpoints.down('xs')]: {
        padding: '3rem 1rem',
      },
    },
    button: {
      marginTop: '2rem',
      borderRadius: '.2rem',
    },
    inputBox: {
      margin: '.5rem 0',
    },
    inputRoot: {
      backgroundColor: '#fff',
    },
    title: {
      fontFamily: 'Alegreya',
      fontSize: '2rem',
      color: '#636363',
      textAlign: 'center',
      marginBottom: '3rem',
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
  })
);

let validationSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});

interface Props {}
const LoginForm: React.FC<Props> = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const open = useSelector((state: AppState) => state.common.openAuthModal);
  const {
    handleChange,
    values,
    errors,
    isValid,
    touched,
    handleSubmit,
    handleBlur,
    isSubmitting,
    setSubmitting,
  } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      const data = await loginAPI(values);
      setSubmitting(true);
      if (!data) {
        setSubmitting(false);
        return setErrors({
          email: 'Invalid credential',
          password: 'Invalid credential',
        });
      }
      setSubmitting(false);
      dispatch(login(data));
    },
  });
  useEffect(() => {
    setSubmitting(false);
  }, [open]);

  const handleSignUp = () => {
    dispatch(toggleModal('signUp'));
  };

  return (
    <div className={classes.paper}>
      <div className={classes.form}>
        <Typography variant='body1' className={classes.title}>
          Sign in
        </Typography>
        <TextField
          error={!!errors.email && touched.email}
          classes={{
            root: classes.inputRoot,
          }}
          variant='standard'
          onChange={handleChange}
          value={values.email}
          onBlur={handleBlur}
          className={classes.inputBox}
          name='email'
          id='filled-error-helper-text'
          label='Email'
          helperText={touched.email && errors.email}
        />
        <PasswordInput
          label='password'
          value={values.password}
          handleChange={handleChange}
          handleBlur={handleBlur}
          errors={errors}
          touched={touched}
        />
        <Button
          onClick={() => handleSubmit()}
          className={classes.button}
          disabled={isSubmitting || !isValid}
          variant='contained'
        >
          Login
        </Button>
      </div>
      <div className={classes.footer}>
        <div className={classes.divider} />
        <Typography variant='body2'>
          Don't have an account?{' '}
          <span onClick={handleSignUp} className={classes.signIn}>
            Sign up
          </span>
        </Typography>
      </div>
    </div>
  );
};

export default LoginForm;

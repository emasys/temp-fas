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
  Collapse,
  IconButton,
} from '@material-ui/core';
import { useRouter } from 'next/router';
import Furniture from '../assets/furniture.svg';
import { useDispatch, useSelector } from 'react-redux';
import { login, updateUser } from '../redux/actions/auth';
import { AppState } from '../lib/initialState';
import {
  setValue,
  handleAuthModal,
  toggleModal,
} from '../redux/actions/common';
import { EActionTypes } from '../redux/actions/types';
import { updateUserApi } from '../api';
import PasswordInput from './PasswordField';
import Alert from '@material-ui/lab/Alert';
import { CloseRounded } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#fff',
      borderRadius: '.2rem',
      margin: 'auto',
      outline: 'none',
      overflow: 'auto',
      // [theme.breakpoints.down('xs')]: {
      //   width: '95%',
      //   top: '2%'
      // },
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '100%',
      padding: '3rem',
      paddingTop: 0,
      backgroundColor: '#fff',
      [theme.breakpoints.down('xs')]: {
        padding: '.5rem .5rem',
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
  fullName: Yup.string().required(),
});

interface Props {}
const UserInfoForm: React.FC<Props> = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [show, setOpen] = React.useState(false);
  const user = useSelector((state: AppState) => state.user);
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
      email: user.email || '',
      fullName: user.fullName || '',
    },
    validationSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      const { email, ...rest } = values;
      const data = await updateUserApi(rest);
      setSubmitting(true);
      if (!data) {
        setSubmitting(false);
        return setErrors({
          fullName: 'Invalid input characters',
        });
      }
      dispatch(updateUser(data));
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 3000);
      setSubmitting(false);
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
        <Collapse in={show}>
          <Alert
            severity='success'
            action={
              <IconButton
                aria-label='close'
                color='inherit'
                size='small'
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseRounded fontSize='inherit' />
              </IconButton>
            }
          >
            Changes saved!
          </Alert>
        </Collapse>
        <TextField
          error={!!errors.fullName && touched.fullName}
          classes={{
            root: classes.inputRoot,
          }}
          variant='filled'
          onChange={handleChange}
          value={values.fullName}
          onBlur={handleBlur}
          className={classes.inputBox}
          name='fullName'
          id='filled-error-helper-text'
          placeholder='Full name'
          helperText={touched.fullName && errors.fullName}
        />
        <TextField
          error={!!errors.email && touched.email}
          classes={{
            root: classes.inputRoot,
          }}
          variant='filled'
          disabled
          onChange={handleChange}
          value={values.email}
          onBlur={handleBlur}
          className={classes.inputBox}
          name='email'
          id='filled-error-helper-text'
          placeholder='Email'
          helperText={touched.email && errors.email}
        />
        <Button
          onClick={() => handleSubmit()}
          className={classes.button}
          disabled={isSubmitting || !isValid}
          variant='contained'
        >
          Save changes
        </Button>
      </div>
    </div>
  );
};

export default UserInfoForm;

import React, {  useEffect } from 'react';
import { useFormik } from 'formik';
import NumberFormat from 'react-number-format';
import * as Yup from 'yup';
import {

  createStyles,
  makeStyles,
  Theme,
  Typography,

  TextField,
  Button,

  IconButton,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../lib/initialState';
import {

  handleAuthModal,
  toggleModal,
} from '../redux/actions/common';
import {  } from '../redux/actions/types';
import {  signUpVerify } from '../api';
import {

  CloseRounded,
  ArrowBackIosRounded,
} from '@material-ui/icons';
import { login } from '../redux/actions/auth';
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
        top: '10%'
      },
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
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
        padding: '3rem 1rem'
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
      fontSize: '1.4rem',
      color: '#636363',
      textAlign: 'center',
    },
    subtitle: {
      marginBottom: '1rem',
      marginTop: '0',
      fontSize: '.9rem',
      color: '#636363',
      textAlign: 'center',
    },
    backBtn: {
      fontSize: '1.3rem',
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

const validationSchema = Yup.object().shape({
  token: Yup.string().required(),
  fullName: Yup.string().required('Please provide your name'),
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});

const CodeInput = (props: any) => {
  const { inputRef, onChange, ...other } = props;
  return (
    <NumberFormat
      {...other}
      inputMode='numeric'
      maxLength='6'
      getInputRef={inputRef}
      onValueChange={(values: any) => {
        onChange({
          target: {
            name: other.name,
            value: values.value,
          },
        });
      }}
    />
  );
};

interface Props {}
const CodeForm: React.FC<Props> = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const open = useSelector((state: AppState) => state.common.openAuthModal);
  const email = useSelector((state: AppState) => state.common.tempEmail);
  const {
    handleChange,
    values,
    errors,
    handleBlur,
    handleSubmit,
    isValid,
    touched,
    isSubmitting,
    setSubmitting,
  } = useFormik({
    initialValues: {
      token: '',
      fullName: '',
      email,
      password: '',
    },
    validationSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: async (values, { setSubmitting, setFieldError }) => {
      const payload = { ...values, token: Number(values.token) };
      const data = await signUpVerify(payload);
      setSubmitting(true);
      if (!data) {
        setSubmitting(false);
        return setFieldError('token', 'Invalid code');
      }
      dispatch(login(data));
      dispatch(toggleModal('login'));
      setSubmitting(false);
      dispatch(handleAuthModal(false));
    },
  });
  useEffect(() => {
    setSubmitting(false);
  }, [open]);

  const goBack = () => {
    dispatch(toggleModal('signUp'));
  };

  const handleClose = () => {
    dispatch(handleAuthModal(false));
  };

  return (
    <div className={classes.paper}>
      <div className={classes.header}>
        <IconButton onClick={goBack}>
          <ArrowBackIosRounded className={classes.backBtn} />
        </IconButton>
        <Typography variant='body1' className={classes.title}>
          Complete sign up
        </Typography>
        <IconButton onClick={handleClose}>
          <CloseRounded />
        </IconButton>
      </div>
      <div className={classes.form}>
        <Typography variant='body2' className={classes.subtitle}>
          We sent a code to {email || 'your email'}, please enter it below.
        </Typography>
        <TextField
          error={!!errors.token && touched.token}
          classes={{
            root: classes.inputRoot,
          }}
          variant='standard'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.token}
          className={classes.inputBox}
          name='token'
          id='filled-error-helper-text'
          label='Code'
          InputProps={{
            inputComponent: CodeInput,
          }}
          helperText={errors.token && touched.token}
        />
        <TextField
          error={!!errors.fullName && touched.fullName}
          classes={{
            root: classes.inputRoot,
          }}
          variant='standard'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.fullName}
          className={classes.inputBox}
          name='fullName'
          id='filled-error-helper-text'
          label='Full name'
          helperText={touched.fullName && errors.fullName}
        />
        <TextField
          error={!!errors.email && touched.email}
          classes={{
            root: classes.inputRoot,
          }}
          variant='standard'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          className={classes.inputBox}
          name='email'
          id='filled-error-helper-text'
          label='Email'
          helperText={touched.email && errors.email}
        />
        <PasswordInput
          value={values.password}
          handleChange={handleChange}
          handleBlur={handleBlur}
          errors={errors}
          label="Create password"
          touched={touched}
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
    </div>
  );
};

export default CodeForm;

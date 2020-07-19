import React, { useEffect } from 'react';
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
import { handleAuthModal, toggleModal } from '../redux/actions/common';
import {} from '../redux/actions/types';
import { signUpVerify, createInvoice } from '../api';
import { CloseRounded, ArrowBackIosRounded } from '@material-ui/icons';
import { login } from '../redux/actions/auth';
import PasswordInput from './PasswordField';
import MoneyInput from './MoneyInput';

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
    },
    header: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      borderRadius: '.2rem',
      padding: '3rem',
      paddingTop: 0,
      backgroundColor: '#fff',
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
    },
    subtitle: {
      marginBottom: '.5rem',
      marginTop: '.5rem',
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
    footerText: {
      fontSize: '.7rem',
      padding: '0 0.9375rem',
    },
  })
);

const validationSchema = Yup.object().shape({
  item: Yup.string().required(),
  amount: Yup.string().required(),
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
const InvoiceForm: React.FC<Props> = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const open = useSelector((state: AppState) => state.common.openAuthModal);
  const email = useSelector((state: AppState) => state.common.tempEmail);
  const { customer, vendorId, id } = useSelector(
    (state: AppState) => state.common.drawerContent
  );

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
      item: '',
      amount: '',
    },
    validationSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: async (values, { setSubmitting, setFieldError }) => {
      const payload = {
        invoice: {
          [values.item]: values.amount,
        },
      };
      const data = await createInvoice(vendorId, id, payload);
      console.log(data, '=====');
      setSubmitting(true);
      if (!data) {
        setSubmitting(false);
        return
      }
      // dispatch(toggleModal('login'));
      // dispatch(handleAuthModal(false));
      setSubmitting(false);
    },
  });
  useEffect(() => {
    setSubmitting(false);
  }, [open]);

  const handleClose = () => {
    dispatch(handleAuthModal(false));
  };

  return (
    <div className={classes.paper}>
      <div className={classes.header}>
        <IconButton onClick={handleClose}>
          <CloseRounded />
        </IconButton>
      </div>
      <div className={classes.form}>
        <Typography variant='body1' className={classes.title}>
          Generate invoice
        </Typography>
        <Typography variant='body2' className={classes.subtitle}>
          Kindly generate a payment invoice for {customer?.fullName}
        </Typography>
        <TextField
          error={!!errors.item && touched.item}
          classes={{
            root: classes.inputRoot,
          }}
          variant='standard'
          placeholder='Workmanship, tools, etc'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.item}
          className={classes.inputBox}
          name='item'
          id='filled-error-helper-text'
          label='Item'
          helperText={errors.item && touched.item}
        />
        <MoneyInput
          error={!!errors.amount && touched.amount}
          handleBlur={handleBlur}
          handleChange={handleChange}
          label='Amount'
          name='amount'
          value={values.amount}
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
        <Typography variant='body2' className={classes.footerText}>
          Please kindly read through our{' '}
          <span className={classes.signIn}>terms and conditions</span> before
          continuing.
        </Typography>
      </div>
    </div>
  );
};

export default InvoiceForm;

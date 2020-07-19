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
import { AppState } from '../../lib/initialState';
import {
  handleAuthModal,
  toggleModal,
  updateInvoiceValue,
} from '../../redux/actions/common';
import {} from '../../redux/actions/types';
import { signUpVerify, createInvoice } from '../../api';
import {
  CloseRounded,
  ArrowBackIosRounded,
  AddCircleRounded,
} from '@material-ui/icons';
import { login } from '../../redux/actions/auth';
import PasswordInput from '../PasswordField';
import MoneyInput from '../MoneyInput';
import Form from './Form';
import { getInvoice } from '../../redux/selectors/common';
import FormFooter from './FormFooter';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      display: 'flex',
      flexDirection: 'column',
      position: 'absolute',
      overflow: 'auto',
      width: '30rem',
      maxHeight: '80%',
      backgroundColor: '#fff',
      top: '10%',
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
      marginTop: '.5rem',
      borderRadius: '2rem',
    },
    addButton: {
      marginTop: '2rem',
      borderRadius: '2rem',
      color: '#636363',
    },
    inputBox: {
      margin: '.5rem 0',
    },
    inputRoot: {
      backgroundColor: '#fff',
    },
    title: {
      fontFamily: 'Alegreya',
      fontSize: '1.5rem',
      marginBottom: '1rem',
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
    net: {
      padding: '.5rem 0',
      borderTop: '1px solid rgba(196, 196, 196, .2)',
    },
    signIn: {
      cursor: 'pointer',
      color: '#43CEA2',
    },
    footerText: {
      fontSize: '.7rem',
      padding: '0 0.9375rem',
    },
    total: {
      paddingBottom: '2rem',
      background: 'rgba(128, 0, 128, 0.04)',
    },
  })
);

const validationSchema = Yup.object().shape({
  items: Yup.array().required(),
});

interface Props {}
const InvoiceForm: React.FC<Props> = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const open = useSelector((state: AppState) => state.common.openAuthModal);
  const {
    allEntries,
    total,
    netProceed,
    fee,
  } = useSelector((state: AppState) => getInvoice(state));
  const { customer, vendorId, id, invoice } = useSelector(
    (state: AppState) => state.common.drawerContent
  );

  useEffect(() => {
    if (invoice) {
      dispatch(updateInvoiceValue(invoice));
    }
  }, [invoice]);

  const {
    handleChange,
    values,
    errors,
    setFieldValue,
    handleBlur,
    handleSubmit,
    isValid,
    touched,
    isSubmitting,
    setSubmitting,
  } = useFormik({
    initialValues: {
      items: allEntries,
    },
    validationSchema,
    enableReinitialize: true,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: async (values, { setSubmitting, setFieldError }) => {
      let payload = {
        invoice: {},
      };
      values.items.forEach((item) => {
        payload.invoice[item.item] = Number(item.value);
      });

      const data = await createInvoice(vendorId, id, payload);
      console.log(payload, '=====', data);
      setSubmitting(true);
      if (!data) {
        setSubmitting(false);
        return;
      }
      //   dispatch(toggleModal('login'));
      //   dispatch(handleAuthModal(false));
      //   setSubmitting(false);
    },
  });
  useEffect(() => {
    setSubmitting(false);
  }, [open]);

  const handleClose = () => {
    dispatch(handleAuthModal(false));
  };

  const addMoreRow = () => {
    const initValue = values.items;
    initValue.push({ item: '', value: '', id: initValue.length });
    setFieldValue('items', initValue);
  };

  return (
    <div className={classes.paper}>
      <div className={classes.header}>
        <IconButton onClick={handleClose}>
          <CloseRounded />
        </IconButton>
      </div>
      <div>
        <Typography variant='body1' className={classes.title}>
          Generate invoice for {customer?.fullName}
        </Typography>
        <div className={classes.divider} />
      </div>
      {values.items.map((input, index) => {
        if (input.item !== 'total') {
          return (
            <Form
              key={index}
              item={input.item}
              value={input.value}
              id={input.id}
            />
          );
        }
      })}
      <div className={classes.form}>
        <Button
          onClick={addMoreRow}
          className={classes.addButton}
          variant='outlined'
        >
          Add more item
        </Button>
        <Button
          onClick={() => handleSubmit()}
          className={classes.button}
          disabled={isSubmitting || !isValid}
          variant='contained'
        >
          Continue
        </Button>
      </div>
      <div className={classes.total}>
        <div className={classes.divider} />
        <FormFooter item={total.item} value={total.value} total />
        <FormFooter item={fee.item} value={fee.value} fee />
        <FormFooter item={netProceed.item} value={netProceed.value} net />
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

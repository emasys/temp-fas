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
  Grid,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../lib/initialState';
import {
  handleAuthModal,
  toggleModal,
  updateInvoiceValue,
  addInvoiceValue,
} from '../../redux/actions/common';
import {} from '../../redux/actions/types';
import { signUpVerify, createInvoice } from '../../api';
import { CloseRounded, ArrowBackIosRounded, Save } from '@material-ui/icons';
import { login } from '../../redux/actions/auth';
import PasswordInput from '../PasswordField';
import MoneyInput from '../MoneyInput';
import { formatMoney } from '../../util';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      paddingLeft: '2rem',
      alignItems: 'center',
    },
    button: {
      marginTop: '2rem',
      borderRadius: '2rem',
    },
    inputBox: {
      margin: '.5rem 0',
      width: '100%',
    },
    inputRoot: {
      backgroundColor: '#fff',
    },
    item: {
      textTransform: 'capitalize',
    },
  })
);

const validationSchema = Yup.object().shape({
  item: Yup.string().required(),
  amount: Yup.string().required(),
  saved: Yup.boolean(),
});

interface Props {
  item: any;
  value: any;
  id: number | string;
  total?: boolean;
}

const Form: React.FC<Props> = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const savedValues = useSelector(
    (state: AppState) => state.common.invoiceValues
  );

  const { handleChange, values, errors, handleBlur, touched } = useFormik({
    initialValues: {
      item: props.item,
      amount: props.value,
      saved: !!props.value && !!props.item,
    },
    validationSchema,
    validateOnChange: true,
    validateOnBlur: true,
    enableReinitialize: true,
    onSubmit: () => {},
  });
  const { item, amount, saved } = values;

  const saveValue = () => {
    if (!item) {
      return removeValue();
    }
    const payload = [
      ...savedValues.filter((item) => item.id !== props.id),
      { item, value: amount, id: props.id },
    ];
    dispatch(addInvoiceValue(payload));
  };
  const removeValue = () => {
    const payload = savedValues.filter((item) => item.id !== props.id);
    dispatch(addInvoiceValue(payload));
  };
  return (
    <Grid container spacing={2} className={classes.container}>
      <Grid item xs={6}>
        {item && saved ? (
          <Typography variant='body2' className={classes.item}>
            {item}
          </Typography>
        ) : (
          <TextField
            error={!!errors.item && !!touched.item}
            classes={{
              root: classes.inputRoot,
            }}
            variant='standard'
            placeholder='Workmanship, tools, etc'
            onChange={handleChange}
            onBlur={handleBlur}
            value={item}
            className={classes.inputBox}
            name='item'
            label='Item'
            helperText={errors.item && touched.item}
          />
        )}
      </Grid>
      <Grid item xs={4}>
        {amount && saved ? (
          <Typography variant='body2'>{formatMoney(amount)}</Typography>
        ) : (
          <MoneyInput
            error={!!errors.amount && touched.amount}
            handleBlur={handleBlur}
            handleChange={handleChange}
            label='Amount'
            name='amount'
            value={amount}
          />
        )}
      </Grid>
      {!props.total && (
        <Grid item xs={2}>
          {saved ? (
            <IconButton onClick={removeValue}>
              <CloseRounded />
            </IconButton>
          ) : (
            <IconButton onClick={saveValue}>
              {item ? <Save /> : <CloseRounded />}
            </IconButton>
          )}
        </Grid>
      )}
    </Grid>
  );
};

export default Form;

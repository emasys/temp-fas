import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import DateFnsUtils from '@date-io/date-fns';
import Alert from '@material-ui/lab/Alert';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import {
  createStyles,
  makeStyles,
  Theme,
  Typography,
  TextField,
  Button,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../lib/initialState';
import { setValue, handleAuthModal, validateToken } from '../redux/actions/common';
import { EActionTypes } from '../redux/actions/types';
import { createVendor, createOrder } from '../api';
import NumberFormat from 'react-number-format';
import SelectInput from './SelectInput';
import { getLocations } from '../redux/selectors/locations';
import { getServiceOptions } from '../redux/selectors/services';
import MoneyInput from './MoneyInput';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      display: 'flex',
      flexDirection: 'column',
      position: 'absolute',
      width: '27rem',
      backgroundColor: '#fff',
      top: '10%',
      left: 0,
      borderRadius: '.2rem',
      right: 0,
      margin: 'auto',
      outline: 'none',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      padding: '3rem',
      borderRadius: '.2rem',
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
      marginBottom: '.5rem',
    },
    subtitle: {
      marginBottom: '3rem',
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
    selectWrapper: {
      marginTop: '.5rem',
    },
    caption: {
      fontSize: 12,
    },
    datePicker: {
      color: '#636363',
    },
  })
);

let validationSchema = Yup.object().shape({
  description: Yup.string().required(),
  address: Yup.string().required(),
  dueDate: Yup.string().required(),
  state: Yup.string().required(),
  area: Yup.string(),
});

interface Props {}
const BookingForm: React.FC<Props> = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const open = useSelector((state: AppState) => state.common.openAuthModal);
  const vendor = useSelector((state: AppState) => state.vendor.activeVendor);
  const locations = useSelector((state: AppState) => getLocations(state));
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);
  const {
    handleChange,
    values,
    errors,
    isValid,
    touched,
    handleSubmit,
    handleBlur,
    isSubmitting,
    setFieldValue,
    setSubmitting,
  } = useFormik({
    initialValues: {
      description: '',
      address: '',
      dueDate: '',
      error: '',
      state: '',
      area: '',
    },
    validationSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: async (values, { setSubmitting, setFieldError }) => {
      const { state, area, error, ...rest } = values;
      const payload = {
        ...rest,
        vendorId: vendor.id,
        locationId: area ? area : state,
      };
      const data = await createOrder(payload);
      setSubmitting(true);
      if (!data) {
        dispatch(validateToken())
        setFieldError('error', 'error');
        return setSubmitting(false);
      }
      dispatch(handleAuthModal(false));
      setSubmitting(false);
    },
  });

  const areaOptions = locations.find((loc) => loc.value === values.state)
    ?.areas;

  useEffect(() => {
    setSubmitting(false);
  }, [open]);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    setFieldValue('dueDate', date.toISOString());
  };

  return (
    <div className={classes.paper}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <div className={classes.form}>
          <Typography variant='body1' className={classes.title}>
            Book vendor
          </Typography>
          <Typography variant='body2' className={classes.subtitle}>
            Please provide an explicit description of what you want to help the
            vendor prepare a comprehensive invoice for you.
          </Typography>
          {errors.error && (
            <Alert severity='error'>
              Unfortunately we couldn't complete this booking.
            </Alert>
          )}
          <TextField
            error={!!errors.description && touched.description}
            classes={{
              root: classes.inputRoot,
            }}
            variant='outlined'
            onChange={handleChange}
            value={values.description}
            onBlur={handleBlur}
            className={classes.inputBox}
            name='description'
            multiline
            rows={4}
            rowsMax={8}
            id='description'
            label='Description'
            helperText={touched.description && errors.description}
          />
          <KeyboardDatePicker
            disableToolbar
            variant='inline'
            className={classes.datePicker}
            format='MM/dd/yyyy'
            margin='normal'
            id='date-picker-inline'
            label='Select a due date'
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
          <TextField
            error={!!errors.address && touched.address}
            classes={{
              root: classes.inputRoot,
            }}
            variant='standard'
            onChange={handleChange}
            value={values.address}
            onBlur={handleBlur}
            className={classes.inputBox}
            name='address'
            id='address'
            label='Full address'
            helperText={touched.address && errors.address}
          />
          <div className={classes.selectWrapper} />
          <SelectInput
            name='state'
            placeholder='State'
            variant='standard'
            options={locations}
            handleChange={handleChange}
            value={values.state}
          />
          <div className={classes.selectWrapper} />
          <SelectInput
            name='area'
            placeholder='Area'
            variant='standard'
            options={areaOptions || []}
            handleChange={handleChange}
            value={values.area}
          />
          <Typography variant='body2' className={classes.caption}>
            Please select an area closest to your address.
          </Typography>
          <Button
            onClick={() => handleSubmit()}
            className={classes.button}
            disabled={isSubmitting || !isValid}
            variant='contained'
          >
            Book vendor
          </Button>
        </div>
      </MuiPickersUtilsProvider>
    </div>
  );
};

export default BookingForm;

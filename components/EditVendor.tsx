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
  IconButton,
  Grid,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../lib/initialState';
import {
  setValue,
  handleAuthModal,
  validateToken,
} from '../redux/actions/common';
import { EActionTypes } from '../redux/actions/types';
import { updateVendorAPI } from '../api';
import NumberFormat from 'react-number-format';
import SelectInput from './SelectInput';
import { getLocations, getOneLocation } from '../redux/selectors/locations';
import { getServiceOptions } from '../redux/selectors/services';
import MoneyInput from './MoneyInput';
import { updateUserJob } from '../redux/actions/jobs';
import { CloseRounded } from '@material-ui/icons';
import { phoneInput } from './BAVForm';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      display: 'flex',
      flexDirection: 'column',
      position: 'absolute',
      width: '50rem',
      maxWidth: '80%',
      backgroundColor: '#fff',
      top: '5rem',
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
        top: 0,
      },
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      padding: '3rem',
      borderRadius: '.2rem',
      backgroundColor: '#fff',
      [theme.breakpoints.down('xs')]: {
        padding: '3rem 1rem',
        minHeight: '50rem',
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
      width: '100%',
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
    header: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      [theme.breakpoints.down('xs')]: {
        // marginTop: '2rem',
      },
    },
    banner: {
      background: '#CECECE',
      minHeight: '10rem',
      position: 'relative',
      marginBottom: '3rem',
    },
    logoWrapper: {
      position: 'absolute',
      background: '#F7F7F7',
      width: '9.375rem',
      left: '8rem',
      top: '4.5rem',
      borderRadius: '50%',
      height: '9.375rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      [theme.breakpoints.down('xs')]: {
        left: '2rem'
      },
    },
  })
);

let validationSchema = Yup.object().shape({
  name: Yup.string().required('Provide a business name'),
  rate: Yup.string().required('Provide your average rates'),
  phoneNumber: Yup.string().required('Provide your phone number. ex - 070...'),
  service: Yup.string().required(),
  state: Yup.string().required(),
  area: Yup.string(),
});

interface Props {}
const EditVendor: React.FC<Props> = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const open = useSelector((state: AppState) => state.common.openAuthModal);
  const vendor = useSelector((state: AppState) => state.vendor.activeVendor);
  const services = useSelector((state: AppState) => getServiceOptions(state));
  const currentLocation = useSelector((state: AppState) => getOneLocation(state));
  const locations = useSelector((state: AppState) => getLocations(state));
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
      name: vendor.name || '',
      rate: vendor.rate || '',
      phoneNumber: vendor.phoneNumber || '',
      state: currentLocation.state || '',
      area: currentLocation.area || '',
      service: services.find((service) => service.value === vendor.serviceId)?.value,
    },
    validationSchema,
    validateOnBlur: true,
    validateOnChange: true,
    enableReinitialize: true,
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      const { service, state, area, rate, ...rest } = values;
      const payload = {
        ...rest,
        serviceId: service,
        rate: Number(rate),
        locationId: area ? area : state,
      };
      const data = await  updateVendorAPI(vendor.id, payload);
      setSubmitting(true);
      if (!data) {
        setErrors({
          name: "We couldn't complete this operation"
        });
        return setSubmitting(false);
      }
      setSubmitting(false);
      dispatch(setValue(EActionTypes.UPDATE_VENDOR, data));
      dispatch(handleAuthModal(false));
    },
  });

  const areaOptions = locations.find((loc) => loc.value === values.state)
    ?.areas;

  useEffect(() => {
    setSubmitting(false);
  }, [open]);

  const handleClose = () => {
    dispatch(handleAuthModal(false));
  };

  return (
    <div className={classes.paper}>
      <div className={classes.banner}>
        <div className={classes.header}>
          <IconButton onClick={handleClose}>
            <CloseRounded />
          </IconButton>
        </div>
        <div className={classes.logoWrapper}>
          <Typography variant='body1'>Upload logo</Typography>
        </div>
      </div>

      <div className={classes.form}>
        {errors.name && (
          <Alert severity='error'>
            Unfortunately we couldn't complete this operation.
          </Alert>
        )}
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6}>
            <TextField
              error={!!errors.name && touched.name}
              classes={{
                root: classes.inputRoot,
              }}
              variant='filled'
              onChange={handleChange}
              value={values.name}
              onBlur={handleBlur}
              className={classes.inputBox}
              name='name'
              id='filled-error-helper-text'
              placeholder='Business name'
              helperText={touched.name && errors.name}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <MoneyInput
              value={values.rate}
              variant='filled'
              handleChange={handleChange}
              handleBlur={handleBlur}
              error={!!errors.rate && touched.rate}
              name='rate'
              label='Average rate per job'
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              error={!!errors.phoneNumber && touched.phoneNumber}
              classes={{
                root: classes.inputRoot,
              }}
              variant='filled'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phoneNumber}
              className={classes.inputBox}
              name='phoneNumber'
              id='filled-error-helper-text'
              placeholder='Phone number'
              InputProps={{
                inputComponent: phoneInput,
              }}
              helperText={errors.phoneNumber && touched.phoneNumber}
            />
          </Grid>
          <Grid item xs={12} sm={6} style={{ marginTop: '.5rem' }}>
            <SelectInput
              name='service'
              placeholder='Service category'
              variant='filled'
              options={services}
              handleChange={handleChange}
              value={values.service}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <SelectInput
              name='state'
              placeholder='State'
              variant='filled'
              options={locations}
              handleChange={handleChange}
              value={values.state}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <SelectInput
              name='area'
              placeholder='Area'
              variant='filled'
              options={areaOptions || []}
              handleChange={handleChange}
              value={values.area}
            />
          </Grid>
        </Grid>
        <Button
          onClick={() => handleSubmit()}
          className={classes.button}
          disabled={isSubmitting || !isValid}
          variant='contained'
        >
          update vendor
        </Button>
      </div>
    </div>
  );
};

export default EditVendor;

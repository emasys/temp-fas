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
  validateToken,
} from '../redux/actions/common';
import { EActionTypes } from '../redux/actions/types';
import { loginAPI, createVendor } from '../api';
import PasswordInput from './PasswordField';
import NumberFormat from 'react-number-format';
import SelectInput from './SelectInput';
import { getLocations } from '../redux/selectors/locations';
import { getServiceOptions } from '../redux/selectors/services';
import MoneyInput from './MoneyInput';
import { updateVendor } from '../redux/actions/vendors';
import { CloseRounded } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      display: 'flex',
      flexDirection: 'column',
      position: 'absolute',
      width: '25rem',
      backgroundColor: '#fff',
      top: '10%',
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
        top: '0',
      },
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      minHeight: '50rem',
      padding: '3rem',
      borderRadius: '.2rem',
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
    header: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
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

export const phoneInput = (props: any) => {
  const { inputRef, onChange, ...other } = props;
  return (
    <NumberFormat
      {...other}
      inputMode='numeric'
      format='###-####-####'
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
const BAVForm: React.FC<Props> = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const open = useSelector((state: AppState) => state.common.openAuthModal);
  const services = useSelector((state: AppState) => getServiceOptions(state));
  const locations = useSelector((state: AppState) => getLocations(state));
  const router = useRouter();
  const {
    handleChange,
    values,
    errors,
    isValid,
    touched,
    setFieldValue,
    handleSubmit,
    handleBlur,
    isSubmitting,
    setSubmitting,
  } = useFormik({
    initialValues: {
      name: '',
      rate: '',
      phoneNumber: '',
      state: { value: '' },
      area: { value: '' },
      service: { value: '' },
    },
    validationSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      const { service, state, area, rate, name, phoneNumber } = values;
      const payload = {
        name,
        phoneNumber,
        rate: Number(rate),
        locationId: area?.value ? area.value : state.value,
      };
      const data = await createVendor(service.value, payload);
      setSubmitting(true);
      if (!data) {
        dispatch(validateToken());
        setErrors({
          name: 'You are already a vendor',
          phoneNumber: 'You are already a vendor',
          rate: 'You are already a vendor',
        });
        return setSubmitting(false);
      }
      dispatch(setValue(EActionTypes.UPDATE_VENDOR, data));
      setSubmitting(false);
      router.push('/', '/');
      dispatch(handleAuthModal(false));
    },
  });

  const handleClose = () => {
    dispatch(handleAuthModal(false));
  };

  const areaOptions = locations.find((loc) => loc.value === values.state?.value)
    ?.areas;

  useEffect(() => {
    setSubmitting(false);
  }, [open]);

  const handleTextChange = (e: any, value?: any, name?: string) => {
    handleChange(e);
    if (value) {
      setFieldValue(name, value?.title ? value.title : value || '');
    }
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
          Become a vendor
        </Typography>
        <Typography variant='body2' className={classes.subtitle}>
          Apply to become a vendor.
          <br /> Vendor verification usually last between 2-3 working days.
        </Typography>
        <TextField
          error={!!errors.name && touched.name}
          classes={{
            root: classes.inputRoot,
          }}
          variant='standard'
          onChange={handleChange}
          value={values.name}
          onBlur={handleBlur}
          className={classes.inputBox}
          name='name'
          id='name-error-helper-text'
          label='Business name'
          helperText={touched.name && errors.name}
        />
        <MoneyInput
          value={values.rate}
          handleChange={handleChange}
          handleBlur={handleBlur}
          error={!!errors.rate && touched.rate}
          name='rate'
          label='Rate'
        />
        <TextField
          error={!!errors.phoneNumber && touched.phoneNumber}
          classes={{
            root: classes.inputRoot,
          }}
          variant='standard'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.phoneNumber}
          className={classes.inputBox}
          name='phoneNumber'
          id='phone-error-helper-text'
          label='Phone number'
          InputProps={{
            inputComponent: phoneInput,
          }}
          helperText={errors.phoneNumber && touched.phoneNumber}
        />
        <div className={classes.selectWrapper} />
        <SelectInput
          name='service'
          placeholder='Service category'
          variant='standard'
          options={services}
          handleChange={handleTextChange}
          value={values.service}
        />
        <div className={classes.selectWrapper} />
        <SelectInput
          name='state'
          placeholder='State'
          variant='standard'
          options={locations}
          handleChange={handleTextChange}
          value={values.state}
        />
        <div className={classes.selectWrapper} />
        <SelectInput
          name='area'
          placeholder='Area'
          variant='standard'
          options={areaOptions || []}
          handleChange={handleTextChange}
          value={values.area}
        />
        <Button
          onClick={() => handleSubmit()}
          className={classes.button}
          disabled={isSubmitting || !isValid}
          variant='contained'
        >
          {isSubmitting ? 'Submitting...' : 'Apply'}
        </Button>
      </div>
    </div>
  );
};

export default BAVForm;

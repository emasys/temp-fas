import React, { useEffect } from 'react';
import { Grid, Button } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { useFormik } from 'formik';
import { useSelector } from 'react-redux';
import Router from 'next/router';
import * as Yup from 'yup';
import { AppState } from '../lib/initialState';
import SearchFields from './SearchFields';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      maxWidth: '48.5425rem',
      background: '#fff',
      borderRadius: '0.375rem',
      padding: '3.875rem',
      height: '15.6875rem',
      margin: 'auto',
      boxShadow: '0px 11px 20px 1px rgba(0, 0, 0, 0.08)',
      [theme.breakpoints.down('xs')]: {
        padding: '1rem',
        overflow: 'hidden',
        width: '100%',
        maxWidth: '100%'
      },
    },
    button: {
      marginTop: '2.1456rem',
      [theme.breakpoints.down('xs')]: {
        marginTop: '1rem',
        minHeight: '0rem',
        height: '3rem'
      },
    },
  })
);
let validationSchema = Yup.object().shape({
  search: Yup.string().trim().required('This field is required'),
  state: Yup.string(),
  area: Yup.string(),
});

interface Props {}

const SearchBox: React.FC<Props> = (props) => {
  const classes = useStyles();
  const services = useSelector((state: AppState) => state.services.allServices);
  const {
    handleChange,
    handleSubmit,
    values,
    errors,
    isSubmitting,
    setSubmitting,
    isValid,
    setFieldValue,
  } = useFormik({
    initialValues: {
      search: '',
      state: '',
      area: '',
      submit: ''
    },
    validateOnChange: true,
    validateOnMount: true,
    validationSchema,
    onSubmit: (values, fProps) => {
      const { search, area, state } = values;
      const matchServicesId = services.find(
        (service) => service.name === search
      )?.id;
      const url = `/services/${matchServicesId}?s=${state}&a=${area}`;
      if(!matchServicesId) {
        fProps.setSubmitting(false);
        return fProps.setFieldError('submit', `${search} services not available`)
      }
      fProps.setSubmitting(true);
      Router.push(url, url);
    },
  });

  useEffect(() => {
    setSubmitting(false);
  }, []);

  const handleSearch = () => {
    handleSubmit();
  };
  console.log(errors, '=====');

  return (
    <Grid container className={classes.container}>
      <SearchFields
        values={values}
        setFieldValue={setFieldValue}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <Button
        variant='contained'
        className={classes.button}
        onClick={handleSearch}
        disabled={!isValid || isSubmitting}
        fullWidth
      >
        {isSubmitting ? 'Searching...' : errors.submit ? errors.submit : `Find ${values.search} services`}
      </Button>
    </Grid>
  );
};

export default SearchBox;

import React, { useEffect } from 'react';
import {
  Grid,
  Button,
  FormControl,
  TextField,
  Typography,
} from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { useFormik } from 'formik';
import { useSelector } from 'react-redux';
import Router from 'next/router';
import * as Yup from 'yup';
import clsx from 'clsx';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { getLocations } from '../redux/selectors/locations';
import { AppState } from '../lib/initialState';
import SelectInput from './SelectInput';
import search from '../assets/search.svg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
      width: '700px',
      background: '#fff',
      borderRadius: '0.375rem',
      padding: '3.875rem',
      boxShadow: '0px 11px 20px 1px rgba(0, 0, 0, 0.08)',
      margin: '-5% auto 0',
      [theme.breakpoints.down('sm')]: {
        width: '520px',
      },
      [theme.breakpoints.down('xs')]: {
        width: '100%',
        padding: '2rem 1.5rem',
        margin: '0 auto',
      },
    },
    leadTitle: {
      fontWeight: 500,
      fontFamily: 'Alegreya',
      textAlign: 'center',
      marginBottom: '2.25rem',
      [theme.breakpoints.down('sm')]: {
        fontSize: '1.75rem',
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: '1.25rem',
        marginBottom: '1.5rem',
      },
    },
    icon: {
      width: '1rem',
      marginTop: '0.3rem',
    },
    searchWrapper: {
      marginBottom: '0.625rem',
      [theme.breakpoints.down('xs')]: {},
    },
    endAdornment: {
      display: 'none',
    },
    popup: {
      transform: 'none',
    },
    inputRoot: {
      paddingTop: '0 !important',
    },
    button: {
      marginTop: '2.25rem',
      [theme.breakpoints.down('xs')]: {
        marginTop: '1.5rem',
      },
    },
    buttonDisabled: {
      color: '#FFF !important',
      backgroundColor: '#43CEA2 !important',
    },
    serviceBtn: {
      flexShrink: 0,
      textTransform: 'capitalize',
      marginRight: '12px',
      minWidth: 0,
      '&:hover': {
        color: '#FFF',
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: '.875rem',
      },
    },
    serviceBtnUnselected: {
      backgroundColor: '#F6F6F6',
      color: '#5C5C5C',
    },
    serviceWrapper: {
      display: 'flex',
      overflowX: 'scroll',
      marginBottom: '1rem',
      '-ms-overflow-style': 'none',
      '&::-webkit-scrollbar': {
        display: 'none',
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
  const locations = useSelector((state: AppState) => getLocations(state));
  const searchOption = useSelector((s: AppState) => s.services.searchOption);
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
      state: { value: '' },
      area: { value: '' },
      submit: '',
    },
    validateOnChange: true,
    validateOnMount: true,
    validationSchema,
    onSubmit: (values, fProps) => {
      const { search, area, state } = values;
      const matchServicesId = services.find(
        (service) => service.name === search
      )?.id;
      const url = `/services/${matchServicesId}?s=${state.value}&a=${area.value}`;
      if (!matchServicesId) {
        fProps.setSubmitting(false);
        return fProps.setFieldError(
          'submit',
          `${search} services not available`
        );
      }
      fProps.setSubmitting(true);
      Router.push(url, url);
    },
  });
  const areaOptions = locations.find((loc) => loc.value === values.state.value);

  useEffect(() => {
    setSubmitting(false);
  }, []);

  const handleSearch = () => {
    handleSubmit();
  };

  const handleAutoChange = (e, value: any, name: string) => {
    handleChange(e);
    if (value) {
      setFieldValue(name, value?.title ?? value ?? '');
    }
  };

  const defaultProps = {
    options: searchOption,
    getOptionLabel: (option: any) => (option.title ? option.title : option),
    getOptionSelected: (option: any, value: any) => option.title === value,
  };

  return (
    <div className={classes.container}>
      <Typography variant='h5' className={classes.leadTitle}>
        Find a trusted business near you.
      </Typography>
      <FormControl variant='filled' className={classes.searchWrapper}>
        <Autocomplete
          {...defaultProps}
          id='search-box'
          disableClearable
          autoHighlight
          popupIcon={<img src={search} className={classes.icon} alt='search' />}
          classes={{
            popupIndicatorOpen: classes.popup,
            inputRoot: classes.inputRoot,
          }}
          value={values.search}
          onChange={(event: any, newValue: any) => {
            handleAutoChange(event, newValue, 'search');
          }}
          renderInput={(params) => (
            <TextField
              id='search'
              variant='filled'
              fullWidth
              placeholder='What service are you looking for?'
              {...params}
            />
          )}
        />
      </FormControl>
      <div className={classes.serviceWrapper}>
        {services.map((service) => {
          return (
            <Button
              onClick={() => {
                setFieldValue('search', service.name);
              }}
              variant='contained'
              className={clsx([
                classes.serviceBtn,
                service.name !== values.search && classes.serviceBtnUnselected,
              ])}
            >
              {service.name}
            </Button>
          );
        })}
      </div>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <SelectInput
            name='state'
            placeholder='State'
            options={locations}
            handleChange={handleAutoChange}
            value={values.state}
          />
        </Grid>
        <Grid item xs={6}>
          <SelectInput
            name='area'
            placeholder='Area'
            options={areaOptions?.areas || []}
            handleChange={handleAutoChange}
            value={values.area}
          />
        </Grid>
      </Grid>
      <Button
        variant='contained'
        className={classes.button}
        onClick={handleSearch}
        disabled={!isValid || isSubmitting}
        classes={{ disabled: classes.buttonDisabled }}
        fullWidth
      >
        {isSubmitting
          ? 'Searching...'
          : errors.submit
          ? errors.submit
          : `Find ${values.search} services`}
      </Button>
    </div>
  );
};

export default SearchBox;

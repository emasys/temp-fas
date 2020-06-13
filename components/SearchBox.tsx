import React, { useEffect } from 'react';
import {
  Grid,
  Button,
  FormControl,
  FilledInput,
  InputAdornment,
  IconButton,
} from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { withFormik, FormikProps } from 'formik';
import { useSelector } from 'react-redux';
import Router from 'next/router';
import * as Yup from 'yup';
import useAutocomplete from '@material-ui/lab/useAutocomplete';
import SelectInput from './SelectInput';
import search from '../assets/search.svg';
import { AppState } from '../lib/initialState';

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
    },
    results: {
      margin: '0 5px',
    },
    button: {
      marginTop: '2.1456rem',
    },
    state: {
      width: '7rem',
      [theme.breakpoints.down('sm')]: {
        width: '5rem',
      },
    },
    area: {
      width: '7rem',
      [theme.breakpoints.down('sm')]: {
        width: '5rem',
      },
    },
    searchInput: {
      width: '17.6856rem',
      [theme.breakpoints.down('sm')]: {
        width: '17rem',
      },
    },
    icon: {
      width: '1rem',
    },
    formWrapper: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    endAdornment: {
      display: 'none',
    },
    listbox: {
      width: '100%',
      margin: 0,
      padding: 0,
      zIndex: 1,
      position: 'absolute',
      listStyle: 'none',
      backgroundColor: '#fff',
      overflow: 'auto',
      maxHeight: '9.7rem',
      borderRadius: '0 0 4px 4px',
      boxShadow: '0px 11px 20px 1px rgba(0, 0, 0, 0.08)',
      '& li': {
        padding: '1rem .4rem',
        textTransform: 'capitalize',
      },
      '& li[data-focus="true"]': {
        backgroundColor: '#43CEA2',
        color: 'white',
        cursor: 'pointer',
      },
      '& li:active': {
        backgroundColor: '#43CEA2',
        color: 'white',
      },
    },
  })
);

interface Props {}
interface ISearchValues {
  area: string;
  state: string;
  search: any;
  services: any[];
}

const SearchBox: React.FC<Props & FormikProps<ISearchValues>> = (props) => {
  const { handleChange, handleSubmit, values, isValid, setFieldValue } = props;
  const searchOption = useSelector(
    (state: AppState) => state.services.searchOption
  );
  const services = useSelector((state: AppState) => state.services.allServices);
  const classes = useStyles();
  const handleAutoChange = (value: any) => {
    setFieldValue('search', value?.title ? value.title : '');
  };
  useEffect(() => {
    setFieldValue('services', services);
  }, [services]);

  const {
    getRootProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = useAutocomplete({
    id: 'search',
    options: searchOption,
    getOptionLabel: (option) => option.title,
    onChange: (_, value) => handleAutoChange(value),
    freeSolo: true,
    onInputChange: handleChange,
  });
  const handleSearch = () => {
    handleSubmit();
  };

  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} className={classes.formWrapper}>
        <FormControl variant='filled'>
          <div>
            <div {...getRootProps()}>
              <FilledInput
                id='search'
                type={'text'}
                name='search'
                {...getInputProps()}
                placeholder='What service are you looking for?'
                className={classes.searchInput}
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton
                      aria-label='toggle password visibility'
                      onClick={handleSearch}
                      edge='end'
                    >
                      <img src={search} className={classes.icon} alt='search' />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </div>
            {groupedOptions.length > 0 ? (
              <ul className={classes.listbox} {...getListboxProps()}>
                {groupedOptions.map((option, index) => (
                  <li {...getOptionProps({ option, index })}>{option.title}</li>
                ))}
              </ul>
            ) : null}
          </div>
        </FormControl>
        <SelectInput
          name='state'
          placeholder='State'
          className={classes.state}
          options={[{ value: 'lagos', label: 'Lagos' }]}
          handleChange={handleChange}
          value={values.state}
        />
        <SelectInput
          name='area'
          placeholder='Area'
          className={classes.area}
          options={[{ value: 'ikeja', label: 'Ikeja' }]}
          handleChange={handleChange}
          value={values.area}
        />
      </Grid>
      <Button
        variant='contained'
        className={classes.button}
        onClick={handleSearch}
        fullWidth
      >
        Show {isValid ? <strong className={classes.results}>2k</strong> : ''}{' '}
        Results
      </Button>
    </Grid>
  );
};

interface ISearchInitValues {
  area?: string;
  state?: string;
  search?: any;
}

let validationSchema = Yup.object().shape({
  search: Yup.string().trim().required('This field is required'),
  state: Yup.string(),
  area: Yup.string(),
});

const SearchForm = withFormik<Props & ISearchInitValues, ISearchValues>({
  mapPropsToValues: (props) => {
    const { search, state, area } = props;
    return {
      search: search || '',
      state: state || '""',
      area: area || '""',
      services: [],
    };
  },
  validateOnChange: true,
  validateOnMount: true,
  validationSchema,
  handleSubmit: (values) => {
    const { services, search } = values;
    const matchServicesId = services.find((service) => service.name === search)
      ?.id;
    Router.push(`/services/${matchServicesId}`);
  },
})(SearchBox);

export default SearchForm;

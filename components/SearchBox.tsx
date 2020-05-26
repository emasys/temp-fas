import React from 'react';
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
import * as Yup from 'yup';
import SelectInput from './SelectInput';
import search from '../assets/search.svg';

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
      margin: '0 5px'
    },
    button: {
      marginTop: '2.1456rem',
    },
    state: {
      width: '7rem',
      [theme.breakpoints.down('sm')]: {
        width: '5rem'
      }
    },
    area: {
      width: '7rem',
      [theme.breakpoints.down('sm')]: {
        width: '5rem'
      }
    },
    searchInput: {
      width: '17.6856rem',
      [theme.breakpoints.down('sm')]: {
        width: '17rem'
      }
    },
    icon: {
      width: '1rem',
    },
    formWrapper: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  })
);

interface Props {}
interface ISearchValues {
  area: string;
  state: string;
  search: string;
}
const SearchBox: React.FC<Props & FormikProps<ISearchValues>> = (props) => {
  const { handleChange, handleSubmit, values, isValid } = props;
  const classes = useStyles();
  const handleSearch = () => {
    handleSubmit();
  };
  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} className={classes.formWrapper}>
        <FormControl variant='filled'>
          <FilledInput
            id='filled-adornment-password'
            type={'text'}
            name='search'
            value={values.search}
            placeholder='What service are you looking for?'
            className={classes.searchInput}
            onChange={handleChange}
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
        </FormControl>
        <SelectInput
          name='state'
          className={classes.state}
          options={[{ value: 'lagos', label: 'Lagos' }]}
          handleChange={handleChange}
          value={values.state}
        />
        <SelectInput
          name='area'
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
  search?: string;
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
    };
  },
  validateOnChange: true,
  validateOnMount: true,
  validationSchema,
  handleSubmit: (values, { props }) => {
    console.log(values, '>>>>>>>');
  },
})(SearchBox);

export default SearchForm;

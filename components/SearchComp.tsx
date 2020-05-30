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
import useAutocomplete from '@material-ui/lab/useAutocomplete';
import SelectInput from './SelectInput';
import search from '../assets/search.svg';
import { useSelector } from 'react-redux';
import { AppState } from '../lib/initialState';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    results: {
      margin: '0 5px',
    },
    select: {
      height: '3rem',
      marginRight: '1.1875rem'
    },
    state: {
      width: '6rem',
      [theme.breakpoints.down('sm')]: {
        width: '5rem',
      },
    },
    area: {
      width: '6rem',
      [theme.breakpoints.down('sm')]: {
        width: '5rem',
      },
    },
    searchInput: {
      width: '15.0625rem',
      height: '3rem',
      marginRight: '3rem'
    },
    icon: {
      width: '1rem',
    },
    formWrapper: {
      display: 'flex',
      justifyContent: 'flex-start',
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
  relevance: string;
  search: any;
}

const SearchComp: React.FC<Props & FormikProps<ISearchValues>> = (props) => {
  const { handleChange, handleSubmit, values, isValid, setFieldValue } = props;
  const searchOption = useSelector(
    (state: AppState) => state.services.searchOption
  );
  const classes = useStyles();
  const handleAutoChange = (value: any) => {
    setFieldValue('search', value?.title ? value.title : '');
  };
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
    <Grid item xs={12} className={classes.formWrapper}>
      <FormControl variant='filled'>
        <div>
          <div {...getRootProps()}>
            <FilledInput
              id='search'
              type={'text'}
              name='search'
              {...getInputProps()}
              className={classes.searchInput}
              value={values.search}
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
        controlClass={classes.select}
        className={classes.state}
        options={[{ value: 'lagos', label: 'Lagos' }]}
        handleChange={handleChange}
        value={values.state}
      />
      <SelectInput
        name='area'
        placeholder='Area'
        controlClass={classes.select}
        className={classes.area}
        options={[{ value: 'ikeja', label: 'long area name asdasd' }]}
        handleChange={handleChange}
        value={values.area}
      />
      <SelectInput
        name='relevance'
        placeholder='Relevance'
        controlClass={classes.select}
        className={classes.area}
        options={[{ value: 'ratings', label: 'sort by ratings' }]}
        handleChange={handleChange}
        value={values.relevance}
      />
    </Grid>
  );
};

interface ISearchInitValues {
  area?: string;
  state?: string;
  relevance?: string;
  search?: any;
}

let validationSchema = Yup.object().shape({
  search: Yup.string().trim().required('This field is required'),
  state: Yup.string(),
  area: Yup.string(),
});

const SearchForm = withFormik<Props & ISearchInitValues, ISearchValues>({
  mapPropsToValues: (props) => {
    const { search, state, area, relevance } = props;
    return {
      search: search || 'mechanic',
      state: state || '""',
      area: area || '""',
      relevance: relevance || '""',
    };
  },
  validateOnChange: true,
  validateOnMount: true,
  validationSchema,
  handleSubmit: (values, { props }) => {
    console.log(values, '>>>>>>>', props);
  },
})(SearchComp);

export default SearchForm;

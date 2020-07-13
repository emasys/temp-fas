import React from 'react';
import {
  Grid,
  FormControl,
  FilledInput,
  InputAdornment,
  IconButton,
} from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import useAutocomplete from '@material-ui/lab/useAutocomplete';
import SelectInput from './SelectInput';
import search from '../assets/search.svg';
import { AppState } from '../lib/initialState';
import { getLocations } from '../redux/selectors/locations';

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

interface Props {
  setFieldValue: (field: string, value: any, validate?: boolean) => void;
  handleChange: (e: any) => void;
  handleSubmit: () => void;
  values: any;
}

const SearchFields: React.FC<Props> = ({
  setFieldValue,
  handleChange,
  handleSubmit,
  values,
}) => {
  const searchOption = useSelector(
    (state: AppState) => state.services.searchOption
  );
  const locations = useSelector((state: AppState) => getLocations(state));

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
    freeSolo: false,
    onInputChange: handleChange,
  });
  const handleSearch = () => {
    handleSubmit();
  };

  const handleKeyPress = (event: React.KeyboardEvent<any>) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  }

  const areaOptions = locations.find((loc) => loc.value === values.state);

  return (
    <Grid item xs={12} className={classes.formWrapper}>
      <FormControl variant='filled'>
        <div>
          <div {...getRootProps()}>
            <FilledInput
              id='search'
              onKeyPress={handleKeyPress}
              type={'text'}
              name='search'
              {...getInputProps()}
              placeholder='What service are you looking for?'
              className={classes.searchInput}
              value={values.search}
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
        options={locations}
        handleChange={handleChange}
        value={values.state}
      />
      <SelectInput
        name='area'
        placeholder='Area'
        className={classes.area}
        options={areaOptions?.areas || []}
        handleChange={handleChange}
        value={values.area}
      />
    </Grid>
  );
};

export default SearchFields;

import React, { useEffect } from 'react';
import {
  Grid,
  FormControl,
  FilledInput,
  InputAdornment,
  IconButton,
} from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import useAutocomplete from '@material-ui/lab/useAutocomplete';
import SelectInput from './SelectInput';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../lib/initialState';
import { useRouter } from 'next/router';
import { searchVendors } from '../redux/actions/vendors';
import { getLocations } from '../redux/selectors/locations';
import search from '../assets/search.svg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    results: {
      margin: '0 5px',
    },
    select: {
      height: '3rem',
      marginRight: '1.1875rem',
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
      marginRight: '3rem',
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

let validationSchema = Yup.object().shape({
  search: Yup.string().trim().required('This field is required'),
  state: Yup.string(),
  area: Yup.string(),
});

const SearchComp: React.FC<Props> = (props) => {
  const { query } = useRouter();
  const dispatch = useDispatch();
  const searchOption = useSelector(
    (state: AppState) => state.services.searchOption
  );
  const services = useSelector((state: AppState) => state.services.allServices);
  const locations = useSelector((state: AppState) => getLocations(state));
  let areaOptions = locations.find((loc) => loc.value === query.s);
  const {
    handleChange,
    handleSubmit,
    values,
    isValid,
    setFieldValue,
  } = useFormik({
    initialValues: {
      search: searchOption.find((item) => item.id === query.id)?.title || '',
      state: locations.find((item) => item.value === query.s)?.value || '',
      area:
        areaOptions?.areas?.find((item) => item.value === query.a)?.value || '',
    },
    enableReinitialize: true,
    validateOnChange: true,
    validateOnMount: true,
    validationSchema,
    onSubmit: (values) => {
      const { search, area, state } = values;
      const matchServicesId = services.find(
        (service) => service.name === search
      )?.id;
      const dynamicArea = areaOptions?.areas?.find(
        (item) => item.value === area
      )?.value;
      dispatch(searchVendors(matchServicesId, state, dynamicArea));
      const queryString = {
        state: '',
        area: '',
      };
      const isStateId = state?.length > 10;
      if (isStateId) queryString.state = `?s=${state}`;
      if (dynamicArea?.length > 10 && isStateId)
        queryString.area = `&a=${dynamicArea}`;
      const url = `/services/${matchServicesId}${queryString.state}${queryString.area}`;
      window.history.pushState({}, null, url);
    },
  });
  if (values.state) {
    areaOptions = locations.find((loc) => loc.value === values.state);
  }
  useEffect(() => {
    dispatch(searchVendors(query.id, query.s, query.a));
  }, []);
  const classes = useStyles();
  const handleAutoChange = (value: any) => {
    setFieldValue('search', value?.title ? value.title : '');
    handleSubmit();
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

  const handleLocation = (e) => {
    handleChange(e);
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
        options={locations}
        handleChange={handleLocation}
        value={values.state}
      />
      <SelectInput
        name='area'
        placeholder='Area'
        controlClass={classes.select}
        className={classes.area}
        options={areaOptions?.areas || []}
        handleChange={handleLocation}
        value={values.area}
      />
    </Grid>
  );
};

export default SearchComp;

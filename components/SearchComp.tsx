/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../lib/initialState';
import { useRouter } from 'next/router';
import { searchVendors } from '../redux/actions/vendors';
import { getLocations } from '../redux/selectors/locations';
import SearchFields from './SearchFields';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      [theme.breakpoints.up('xl')]: {
        maxWidth: '87%',
      },
    },
  }),
);

const validationSchema = Yup.object().shape({
  search: Yup.string().trim().required('This field is required'),
  state: Yup.string(),
  area: Yup.string(),
});

const SearchComp: React.FC = () => {
  const classes = useStyles();
  const { query } = useRouter();
  const dispatch = useDispatch();
  const searchOption = useSelector(
    (state: AppState) => state.services.searchOption,
  );
  const urlParams = new URLSearchParams(window?.location?.search);
  const s = urlParams.get('s');
  const a = urlParams.get('a');
  const services = useSelector((state: AppState) => state.services.allServices);
  const locations = useSelector((state: AppState) => getLocations(state));
  let areaOptions = locations.find((loc) => loc.value === s);
  const { handleChange, handleSubmit, values, setFieldValue } = useFormik({
    initialValues: {
      search: searchOption.find((item) => item.id === query.id)?.title || '',
      state: {
        ...(locations.find((item) => item.value === s) || { value: '' }),
      },
      area: {
        ...(areaOptions?.areas?.find((item) => item.value === a) || {
          value: '',
        }),
      },
    },
    enableReinitialize: true,
    validateOnChange: true,
    validateOnMount: true,
    validationSchema,
    onSubmit: async (values) => {
      const { search, area, state } = values;
      const matchServicesId = services.find(
        (service) => service.name === search,
      )?.id;
      const dynamicArea = areaOptions?.areas?.find(
        (item) => item.value === area?.value,
      )?.value;
      dispatch(searchVendors(matchServicesId, state.value, dynamicArea));
      const queryString = {
        state: '',
        area: '',
      };
      const isStateId = state?.value?.length > 10;
      if (isStateId) queryString.state = `?s=${state.value}`;
      if (dynamicArea?.length > 10 && isStateId)
        queryString.area = `&a=${dynamicArea}`;
      const url = `/services/${matchServicesId}${queryString.state}${queryString.area}`;
      window.history.pushState({}, null, url);
    },
  });
  if (values.state) {
    areaOptions = locations.find((loc) => loc.value === values.state?.value);
  }
  useEffect(() => {
    dispatch(searchVendors(query.id, s, a));
  }, []);

  const handleTextChange = (e, value?: any, name?: string) => {
    handleChange(e);
    if (value) {
      setFieldValue(name, value?.title ? value.title : value || '');
    }
    handleSubmit();
  };

  const onSubmit = () => {
    handleSubmit();
  };

  return (
    <Grid item xs={12} className={classes.root}>
      <SearchFields
        values={values}
        setFieldValue={setFieldValue}
        handleChange={handleTextChange}
        handleSubmit={onSubmit}
      />
    </Grid>
  );
};

export default SearchComp;

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
      [theme.breakpoints.down('xl')]: {
        maxWidth: '87%'
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
  const classes = useStyles();
  const { query } = useRouter();
  const dispatch = useDispatch();
  const searchOption = useSelector(
    (state: AppState) => state.services.searchOption
  );
  const services = useSelector((state: AppState) => state.services.allServices);
  const locations = useSelector((state: AppState) => getLocations(state));
  let areaOptions = locations.find((loc) => loc.value === query.s);
  const { handleChange, handleSubmit, values, setFieldValue } = useFormik({
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

  const handleLocation = (e) => {
    handleChange(e);
    handleSubmit();
  };

  return (
    <Grid item xs={12} sm={12} lg={10} className={classes.root}>
      <SearchFields
        values={values}
        setFieldValue={setFieldValue}
        handleChange={handleLocation}
        handleSubmit={handleSubmit}
      />
    </Grid>
  );
};

export default SearchComp;

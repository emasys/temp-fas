/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Grid, FormControl, TextField } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import SelectInput from './SelectInput';
import search from '../assets/search.svg';
import { AppState } from '../lib/initialState';
import { getLocations } from '../redux/selectors/locations';
import Autocomplete from '@material-ui/lab/Autocomplete';

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
      [theme.breakpoints.down('xs')]: {
        width: '100%',
      },
    },
    area: {
      width: '7rem',
      [theme.breakpoints.down('sm')]: {
        width: '5rem',
      },
      [theme.breakpoints.down('xs')]: {
        width: '100%',
      },
    },
    searchInput: {
      width: '17.6856rem',
      [theme.breakpoints.down('sm')]: {
        width: '17rem',
      },
      [theme.breakpoints.down('xs')]: {
        width: '100%',
      },
    },
    icon: {
      width: '1rem',
      marginTop: '0.3rem',
    },
    formWrapper: {
      display: 'flex',
      // justifyContent: 'space-between',
      alignItems: 'center',
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
        justifyContent: 'center',
      },
    },
    selectBoxes: {
      display: 'flex',
      marginLeft: '1.5rem',
      [theme.breakpoints.down('xs')]: {
        marginTop: '1rem',
        marginLeft: 0,
        width: '100%',
      },
    },
    selectBox: {
      marginRight: '1.5rem',
      [theme.breakpoints.down('xs')]: {
        marginRight: '1rem',
        width: '100%',
      },
    },
    selectBoxRight: {
      [theme.breakpoints.down('xs')]: {
        width: '100%',
      },
    },
    searchWrapper: {
      [theme.breakpoints.down('xs')]: {
        width: '100%',
      },
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
    popup: {
      transform: 'none',
    },
    inputRoot: {
      paddingTop: '0 !important',
    },
  }),
);

interface Props {
  setFieldValue?: (field: string, value, validate?: boolean) => void;
  handleChange: (e, value?, name?: string) => void;
  handleSubmit: () => void;
  values: any;
}

const SearchFields: React.FC<Props> = ({ handleChange, values }) => {
  const searchOption = useSelector(
    (state: AppState) => state.services.searchOption,
  );
  const locations = useSelector((state: AppState) => getLocations(state));

  const classes = useStyles();
  const handleAutoChange = (e, value: any, name: string) => {
    handleChange(e, value, name);
  };

  const areaOptions = locations.find((loc) => loc.value === values.state.value);

  const defaultProps = {
    options: searchOption,
    getOptionLabel: (option: any) => (option.title ? option.title : option),
    getOptionSelected: (option: any, value: any) => option.title === value,
  };
  return (
    <Grid item xs={12} className={classes.formWrapper}>
      <FormControl variant="filled" className={classes.searchWrapper}>
        <Autocomplete
          {...defaultProps}
          id="search-box"
          disableClearable
          autoHighlight
          popupIcon={<img src={search} className={classes.icon} alt="search" />}
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
              id="search"
              variant="filled"
              fullWidth
              placeholder="What service are you looking for?"
              className={classes.searchInput}
              {...params}
            />
          )}
        />
      </FormControl>
      <div className={classes.selectBoxes}>
        <div className={classes.selectBox}>
          <SelectInput
            name="state"
            placeholder="State"
            className={classes.state}
            options={locations}
            handleChange={handleAutoChange}
            value={values.state}
          />
        </div>
        <div className={classes.selectBoxRight}>
          <SelectInput
            name="area"
            placeholder="Area"
            className={classes.area}
            options={areaOptions?.areas || []}
            handleChange={handleAutoChange}
            value={values.area}
          />
        </div>
      </div>
    </Grid>
  );
};

export default SearchFields;

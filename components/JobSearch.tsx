import React from 'react';
import {
  Grid,
  FormControl,
  FilledInput,
  InputAdornment,
  IconButton,
  TextField,
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
    inputBox: {
      margin: '.5rem 0',
      backgroundColor: '#fff',
    },
    inputRoot: {
      backgroundColor: '#fff',
      width: '20rem',
    },
    state: {
      width: '5.5rem',
      [theme.breakpoints.down('sm')]: {
        width: '5rem',
      },
    },
    area: {
      width: '5.5rem',
      [theme.breakpoints.down('sm')]: {
        width: '5rem',
      },
    },
    field: {
      marginRight: '.5rem',
    },
    formWrapper: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    icon: {
      width: '1rem',
    },
  })
);

interface Props {}

const JobSearch: React.FC<Props> = (props) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} className={classes.formWrapper}>
      <div className={classes.field}>
        <SelectInput
          name='state'
          placeholder='All'
          className={classes.state}
          options={[]}
          handleChange={(e) => {}}
          value={''}
        />
      </div>
      <div className={classes.field}>
        <SelectInput
          name='area'
          placeholder='This month'
          className={classes.area}
          options={[]}
          handleChange={(e) => {}}
          value={''}
        />
      </div>
      <div className={classes.field}>
        <TextField
          classes={{
            root: classes.inputRoot,
          }}
          placeholder='Search'
          variant='filled'
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton aria-label='search' edge='end'>
                  <img src={search} className={classes.icon} alt='search' />
                </IconButton>
              </InputAdornment>
            ),
          }}
          className={classes.inputBox}
        />
      </div>
    </Grid>
  );
};

export default JobSearch;

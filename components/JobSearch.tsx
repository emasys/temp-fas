import React from 'react';
import { Grid, InputAdornment, IconButton, TextField } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import SelectInput from './SelectInput';
import search from '../assets/search.svg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    inputBox: {
      margin: '.5rem 0',
      backgroundColor: '#fff',
    },
    inputRoot: {
      backgroundColor: '#fff',
      width: '20rem',
      [theme.breakpoints.down('xs')]: {
        width: '100%',
      },
    },
    state: {
      width: '100%',
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
      [theme.breakpoints.down('xs')]: {
        width: '100%',
        margin: 0,
        paddingRight: '.5rem',
      },
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

interface Props {
  handleChange: (e: any, value?: any, name?: string) => void;
  handleSubmit: () => void;
  values: any;
}

const typeOption = [
  { label: 'All', value: '' },
  { label: 'Started', value: 'started' },
  { label: 'Not started', value: 'not_started' },
  { label: 'Completed', value: 'completed' },
];

const JobSearch: React.FC<Props> = ({ handleChange, handleSubmit, values }) => {
  const classes = useStyles();
  const handleTypeChange = (e: any, value?: any, name?: string) => {
    handleChange(e, value, name);
    handleSubmit();
  };

  return (
    <Grid container className={classes.formWrapper}>
      <Grid item xs={12} sm={4} className={classes.field}>
        <SelectInput
          name='type'
          placeholder='All'
          className={classes.state}
          options={typeOption}
          handleChange={handleTypeChange}
          value={values.type}
        />
      </Grid>
      <Grid item xs={12} sm={4} className={classes.field}>
        <TextField
          classes={{
            root: classes.inputRoot,
          }}
          placeholder='Search'
          variant='filled'
          name='search'
          onChange={handleTypeChange}
          value={values.search}
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
      </Grid>
    </Grid>
  );
};

export default JobSearch;

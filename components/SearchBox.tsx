import React, { useState } from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import SelectInput from './SelectInput';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      maxWidth: '48.5425rem',
      background: '#fff',
      height: '15.6875rem',
    },
    button: {
      color: '#14C0B8',
      fontSize: '0.9701rem',
      fontWeight: 500,
      textTransform: 'none',
    },
  })
);

interface Props {}
const SearchBox: React.FC<Props> = (props) => {
  const [value, setValue] = useState('""');
  const classes = useStyles();
  const handleChange = (e: React.ChangeEvent<any>) => {
    setValue(e.target.value);
  };
  return (
    <Grid container className={classes.container}>
      <Grid item xs={12}>
        <SelectInput
          name='State'
          options={[{ value: 'lagos', label: 'Lagos' }]}
          handleChange={handleChange}
          value={value}
        />
         <SelectInput
          name='Area'
          options={[{ value: 'ikeja', label: 'Ikeja' }]}
          handleChange={handleChange}
          value={value}
        />
      </Grid>
    </Grid>
  );
};

export default SearchBox;

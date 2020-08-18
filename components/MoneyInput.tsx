import React, { useState } from 'react';
import {
  TextField,
  makeStyles,
  Theme,
  createStyles,
  Grid,
} from '@material-ui/core';
import NumberFormat from 'react-number-format';
import naira from '../assets/naira.svg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    inputBox: {
      margin: '.5rem 0',
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
    },
    inputRoot: {
      backgroundColor: '#fff',
      width: '100%',
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
    },
    root: {
      position: 'relative',
    },
    filled: {
      marginTop: 0,
      height: '3.33rem',
      background: '#43CEA2',
      borderRadius: '0.25rem 0 0 0.25rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    naira: {
      height: '1.125rem',
    },
  }),
);

export const moneyInput = (props: any) => {
  const { inputRef, left, onChange, ...other } = props;
  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: other.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      // prefix="₦"
      allowNegative={false}
      inputMode="numeric"
    />
  );
};

interface Props {
  error: any;
  value: string | number;
  name: string;
  variant?: 'filled' | 'standard' | 'outlined';
  label: string;
  handleChange: (e: React.ChangeEvent<any>) => void;
  handleBlur: (e: React.ChangeEvent<any>) => void;
}
const MoneyInput: React.FC<Props> = (props) => {
  const classes = useStyles();
  const {
    error,
    handleBlur,
    handleChange,
    value,
    name,
    label,
    variant,
  } = props;
  return (
    <Grid container alignItems="center" className={classes.root}>
      <Grid item xs={2} className={classes.filled}>
        <img src={naira} alt="naira" className={classes.naira} />
      </Grid>
      <Grid item xs={10}>
        <TextField
          error={!!error}
          classes={{
            root: classes.inputRoot,
          }}
          variant={variant ? variant : 'standard'}
          onChange={handleChange}
          onBlur={handleBlur}
          value={value}
          className={classes.inputBox}
          name={name}
          label={variant !== 'filled' ? label : ''}
          placeholder={variant === 'filled' ? label : ''}
          InputProps={{
            inputComponent: moneyInput,
          }}
          helperText={error}
        />
      </Grid>
    </Grid>
  );
};

export default MoneyInput;

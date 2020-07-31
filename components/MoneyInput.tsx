import React, { useState } from 'react';
import {
  TextField,
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core';
import NumberFormat from 'react-number-format';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    inputBox: {
      margin: '.5rem 0',
    },
    inputRoot: {
      backgroundColor: '#fff',
      width: '100%',
    },
  })
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
      prefix='₦'
      allowNegative={false}
      inputMode='numeric'
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
  );
};

export default MoneyInput;

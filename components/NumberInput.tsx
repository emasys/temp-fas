import React, { useState } from 'react';
import {
  TextField,
  InputAdornment,
  IconButton,
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import NumberFormat from 'react-number-format';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    inputBox: {
      margin: '.5rem 0',
    },
    inputRoot: {
      backgroundColor: '#fff',
    },
  })
);

export const numberInput = (props: any) => {
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
      inputMode='numeric'
    />
  );
};

interface Props {
  error: any;
  value: string;
  name: string;
  label: string;
  variant?: 'filled' | 'outlined' | 'standard';
  handleChange: (e: React.ChangeEvent<any>) => void;
  handleBlur: (e: React.ChangeEvent<any>) => void;
}
const NumberInput: React.FC<Props> = (props) => {
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
      variant={variant ? variant : 'filled'}
      onChange={handleChange}
      onBlur={handleBlur}
      value={value}
      fullWidth
      className={classes.inputBox}
      name={name}
      label={variant === 'filled' ? '' : label}
      placeholder={label}
      InputProps={{
        inputComponent: numberInput,
      }}
      helperText={error}
    />
  );
};

export default NumberInput;

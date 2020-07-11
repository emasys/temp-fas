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

interface Props {
  errors: any;
  value: string;
  touched: any;
  handleChange: (e: React.ChangeEvent<any>) => void;
  handleBlur: (e: React.ChangeEvent<any>) => void;
}
const PasswordInput: React.FC<Props> = (props) => {
  const classes = useStyles();

  const [show, togglePassword] = useState(false);
  const { errors, touched, handleBlur, handleChange, value } = props;
  return (
    <TextField
      error={!!errors.password && touched.password}
      classes={{
        root: classes.inputRoot,
      }}
      type={show ? 'text' : 'password'}
      variant='standard'
      onChange={handleChange}
      onBlur={handleBlur}
      value={value}
      className={classes.inputBox}
      name='password'
      id='filled-error-helper-text'
      label='Create Password'
      helperText={touched.password && errors.password}
      InputProps={{
        endAdornment: (
          <InputAdornment position='end'>
            <IconButton
              aria-label='toggle password visibility'
              onClick={() => togglePassword(!show)}
              onMouseDown={() => togglePassword(!show)}
            >
              {show ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default PasswordInput;

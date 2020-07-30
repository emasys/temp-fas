import React, { useState, useEffect } from 'react';
import {
  Grid,
  Typography,
  TextField,
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core';
import { formatPhoneNumber } from '../util';
import NumberInput from './NumberInput';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textField: {
      marginBottom: 20,
    },
    formFieldWrapper: {
      paddingRight: 28,
      [theme.breakpoints.down('xs')]: {
        paddingRight: 0,
      },
    },
    formField: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 5,
    },
    link: {
      color: '#FF8515',
      cursor: 'pointer',
      fontSize: '.8rem',
    },
    inputBox: {
      margin: '.5rem 0',
    },
    inputRoot: {
      backgroundColor: '#fff',
    },
  })
);

interface IToggleProps {
  label: string;
  name: string;
  value: string | null;
  error?: string;
  editStatus?: boolean;
  fieldType?: string;
  style?: any;
  handleBlur: (event: React.ChangeEvent<any>) => void;
  handleChange: (event: React.ChangeEvent<any>) => void;
}

const ToggleField: React.FC<IToggleProps> = ({
  error,
  name,
  label,
  value,
  handleChange,
  handleBlur,
  style,
  editStatus,
  fieldType,
}) => {
  const classes = useStyles();
  const [edit, setEdit] = useState(!!editStatus);
  const toggleEdit = () => {
    setEdit(!edit);
  };
  useEffect(() => {
    setEdit(editStatus);
  }, [editStatus]);
  const number = fieldType === 'number';
  const _inputType = number ? (
    <NumberInput
      error={error}
      variant='filled'
      handleChange={handleChange}
      value={value}
      handleBlur={handleBlur}
      name={name}
      label={label}
    />
  ) : (
    <TextField
      error={!!error}
      classes={{
        root: classes.inputRoot,
      }}
      variant='filled'
      fullWidth
      onChange={handleChange}
      value={value}
      onBlur={handleBlur}
      className={classes.inputBox}
      name={name}
      id={name}
      placeholder={label}
      helperText={error}
    />
  );
  return (
    <Grid
      item
      xs={12}
      className={classes.formFieldWrapper}
      style={{ ...style }}
    >
      {!edit && (
        <>
          <Typography variant='body2' className={classes.formField}>
            {label}
            <span className={classes.link} onClick={toggleEdit}>
              Edit
            </span>
          </Typography>
          <Typography variant='body1'>{value}</Typography>
        </>
      )}
      {edit && _inputType}
    </Grid>
  );
};

export default ToggleField;

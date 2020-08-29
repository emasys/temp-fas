/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { FormControl, TextField } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Autocomplete from '@material-ui/lab/Autocomplete';
import dropdown from '../assets/dropdown.svg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      minWidth: 161,
      width: '100%',
      [theme.breakpoints.down('sm')]: {
        minWidth: 130,
      },
      [theme.breakpoints.down('xs')]: {
        width: '100%',
        minWidth: '100%',
      },
    },
    icon: {
      marginTop: '0.6rem',
      marginLeft: '0.5rem',
      marginRight: '0.5rem',
    },
    inputRoot: {
      paddingTop: '0 !important',
    },
    popupOpen: {
      marginTop: '0.6rem',
      marginLeft: '0.5rem',
      marginRight: 0,
    },
    searchInput: {
      width: '100%',
      // [theme.breakpoints.down('sm')]: {
      //   width: '17rem',
      // },
      // [theme.breakpoints.down('xs')]: {
      //   width: '100%',
      // },
    },
  }),
);

interface Props {
  handleChange: (event: any, value: any, name: string) => void;
  value: { value: string; label?: string } | string;
  name: string;
  controlClass?: any;
  placeholder: string;
  className?: any;
  variant?: 'standard' | 'filled' | 'outlined';
  options: { value: string; label: string }[];
}
const SelectInput: React.FC<Props> = ({
  handleChange,
  value,
  options,
  variant,
  controlClass,
  placeholder,
  name,
}) => {
  const classes = useStyles();
  const defaultProps = {
    options,
    getOptionLabel: (option: any) => option.label || '',
    getOptionSelected: (option, value) => option?.value === value?.value,
  };
  const handleAutoChange = (e: any, value: any, name: string) => {
    handleChange(e, value, name);
  };
  return (
    <form autoComplete="off">
      <FormControl
        variant={variant ? variant : 'filled'}
        className={clsx(classes.formControl, controlClass)}
      >
        <Autocomplete
          {...defaultProps}
          disableClearable
          fullWidth
          popupIcon={
            <img src={dropdown} className={classes.icon} alt="dropdown" />
          }
          autoHighlight
          classes={{
            popupIndicatorOpen: classes.popupOpen,
            inputRoot: classes.inputRoot,
          }}
          value={value}
          onChange={(event: any, newValue: any) => {
            handleAutoChange(event, newValue, name);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              variant={variant ? variant : 'filled'}
              fullWidth
              placeholder={placeholder}
              className={classes.searchInput}
            />
          )}
        />
      </FormControl>
    </form>
  );
};

export default SelectInput;

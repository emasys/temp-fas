import React from 'react';
import { FormControl, Select, MenuItem } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import dropdown from '../assets/dropdown.svg';
import clsx from 'clsx';

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
  })
);

interface Props {
  handleChange: (event: any) => void;
  value: string;
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
  className,
  options,
  variant,
  controlClass,
  placeholder,
  name,
}) => {
  const classes = useStyles();
  return (
    <FormControl
      variant={variant ? variant : 'filled'}
      className={clsx(classes.formControl, controlClass)}
    >
      <Select
        labelId='custom-select'
        id='custom-select'
        name={name}
        fullWidth
        value={value || '""'}
        classes={{
          root: className,
          iconFilled: classes.icon,
        }}
        IconComponent={(props) => (
          <img
            src={dropdown}
            alt='dropdown'
            {...props}
            className={props.className}
          />
        )}
        onChange={handleChange}
      >
        <MenuItem value={'""'}>{placeholder}</MenuItem>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectInput;

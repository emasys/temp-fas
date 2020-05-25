import React from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Icon,
  IconButton,
} from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { AcUnitSharp } from '@material-ui/icons';
import dropdown from '../assets/dropdown.svg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
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
  options: { value: string; label: string }[];
}
const SelectInput: React.FC<Props> = ({
  handleChange,
  value,
  options,
  name,
}) => {
  const classes = useStyles();
  return (
    <FormControl variant='filled' className={classes.formControl}>
      <Select
        labelId='custom-select'
        id='custom-select'
        placeholder='name'
        value={value}
        classes={{
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
        <MenuItem value={'""'}>{name}</MenuItem>
        {options.map((option, index) => (
          <MenuItem value={option.value}>{option.label}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectInput;

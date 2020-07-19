import React from 'react';
import {
  createStyles,
  makeStyles,
  Theme,
  Typography,
  Grid,
} from '@material-ui/core';
import { formatMoney } from '../../util';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      paddingLeft: '2rem',
      alignItems: 'center',
    },
    wrapper: {
      marginTop: 0,
      padding: '.5rem 0',
    },
    item: {
      color: '#101010',
      fontSize: 18,
    },
    value: {
      color: '#101010',
      fontSize: 18,
      fontWeight: 600,
    },
  })
);

interface Props {
  item: any;
  value: any;
  net?: boolean;
  fee?: boolean;
  total?: boolean;
}

const FormFooter: React.FC<Props> = ({ item, value, net, total, fee }) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Grid container spacing={2} className={classes.container}>
        <Grid item xs={6}>
          <Typography variant='body2' className={classes.item}>
            {item}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant='body2' className={classes.value}>
            {formatMoney(value)}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default FormFooter;

import React from 'react';
import { Grid, createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    divider: {
      height: 2,
      background: '#F6F6F6',
      borderRadius: 10,
    },
    dividerInner: {
      height: 2,
      background: '#000',
      width: '21.3125rem',
      borderRadius: 10,
    },
  })
);

interface Props {}
const Divider: React.FC<Props> = (props) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} className={classes.divider}>
      <div className={classes.dividerInner} />
    </Grid>
  );
};

export default Divider;

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      textAlign: 'center'
    },
    link: {
      color: '#008982',
      textDecoration: 'none'
    }
  })
);

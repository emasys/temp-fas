import * as React from 'react';
import {
  Grid,
  makeStyles,
  Theme,
  createStyles,
  Drawer,
  Typography,
} from '@material-ui/core';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../lib/initialState';
import { toggleDrawer } from '../redux/actions/common';
import Divider from './Divider';
import { formatMoney } from '../util';
import Collapsible from './Collapsible';
import Reviews from './Reviews';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      minWidth: '80%',
      maxWidth: '80%',
      padding: '2% 4%',
    },
    titleWrapper: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      paddingBottom: '1rem',
      borderBottom: '1px solid #F6F6F6',
    },
    title: {
      color: '#292929',
      fontSize: '1rem',
      fontWeight: 600,
    },
    subtitle: {
      color: '#292929',
      fontSize: '1.5rem',
      fontWeight: 600,
    },
    money: {
      fontSize: '1.5rem',
      fontWeight: 600,
      color: 'rgb(87, 68, 151)',
    },
    link: {
      fontWeight: 'bold',
      fontSize: '.8rem',
      position: 'relative',
      marginBottom: '.4rem',
    },
    desc: {
      paddingTop: '2rem',
    },
    heading: {
      color: '#292929',
      letterSpacing: '.1rem',
      marginBottom: '2rem',
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
    status: {
      marginBottom: '1rem',
    },
    statusText: {
      cursor: 'pointer',
      height: '2.2262rem',
      width: 'auto',
      background: 'rgb(87, 68, 151)',
      color: '#fff',
      padding: '0 2rem',
      display: 'flex',
      fontSize: '.7rem',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '1.113rem',
    },
    indicator: {
      position: 'absolute',
      height: '.8rem',
      top: '.18rem',
      borderRadius: '1rem',
      width: '0.2rem',
    },
  })
);

interface IProps {}

const JobsDrawer: React.FC<IProps> = (props) => {
  const classes = useStyles();
  const status = useSelector((state: AppState) => state.common.drawerStatus);
  const dispatch = useDispatch();
  const closeDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
    dispatch(toggleDrawer(false));
  };

  return (
    <Drawer
      anchor='right'
      classes={{
        paper: classes.container,
      }}
      open={status}
      onClose={closeDrawer}
    >
      <Grid container>
        <Grid item xs={12} className={classes.status}>
          <Typography variant='body2' className={classes.title}>
            SERVICE NAME
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.titleWrapper}>
          <div>
            <Typography variant='body2' className={classes.subtitle}>
              VENDOR NAME
            </Typography>
            <Typography variant='body2' className={classes.link}>
              <span
                className={classes.indicator}
                style={{ background: '#FF8515' }}
              />
              <span style={{ marginLeft: '.5rem' }}>
                Contracted on{' '}
                {moment('20111031', 'YYYYMMDD').format('MMMM Do YYYY, h:mm a')}
              </span>
            </Typography>
            <Typography variant='body2' className={classes.link}>
              <span
                className={classes.indicator}
                style={{ background: '#574497' }}
              />
              <span style={{ marginLeft: '.5rem' }}>
                Started on{' '}
                {moment('20111031', 'YYYYMMDD').format('MMMM Do YYYY, h:mm a')}
              </span>
            </Typography>
            <Typography variant='body2' className={classes.link}>
              <span
                className={classes.indicator}
                style={{ background: 'rgba(0, 155, 106)' }}
              />
              <span style={{ marginLeft: '.5rem' }}>
                Completed on{' '}
                {moment('20111031', 'YYYYMMDD').format('MMMM Do YYYY, h:mm a')}
              </span>
            </Typography>
          </div>
          <Typography variant='body2' className={classes.money}>
            {formatMoney(40000)}
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.desc}>
          <Collapsible
            title='ORDER DESCRIPTION'
            body='Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sequi
            quidem nesciunt asperiores dolor harum vel nam inventore itaque,
            laudantium, in saepe dignissimos atque aliquam tempora nihil
            aspernatur ipsum fugiat?'
          />
        </Grid>
        <Grid item xs={12} className={classes.desc}>
          <Collapsible
            title='INVOICE'
            body='Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sequi
            quidem nesciunt asperiores dolor harum vel nam inventore itaque,
            laudantium, in saepe dignissimos atque aliquam tempora nihil
            aspernatur ipsum fugiat?'
          />
        </Grid>
        <Grid item xs={12} className={classes.desc}>
          <Typography variant='body2' className={classes.heading}>
            REVIEWS
          </Typography>
          <Reviews />
        </Grid>
        {/* <Grid item xs={6} className={classes.desc}>
          <Typography variant='body2' className={classes.descTitle}>
            DATE STARTED
          </Typography>
          <Typography variant='body2' className={classes.descText}>
            {moment('20111031', 'YYYYMMDD').fromNow()}
          </Typography>
        </Grid>
        <Grid item xs={6} className={classes.desc}>
          <Typography variant='body2' className={classes.descTitle}>
            DATE COMPLETED
          </Typography>
          <Typography variant='body2' className={classes.descText}>
            {moment('20131031', 'YYYYMMDD').fromNow()}
          </Typography>
        </Grid> */}
      </Grid>
    </Drawer>
  );
};

export default JobsDrawer;

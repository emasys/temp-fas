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
import { formatMoney } from '../util';
import Collapsible from './Collapsible';
import Reviews from './Reviews';
import phoneIcon from '../assets/phone.svg';
import chat from '../assets/chat.svg';

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
      textTransform: 'uppercase',
    },
    subtitle: {
      color: '#292929',
      fontSize: '1.5rem',
      fontWeight: 600,
      textTransform: 'uppercase',
      marginBottom: '.4rem',
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
      paddingTop: '0rem',
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
    contactWrapper: {
      display: 'flex',
      alignItems: 'flex-end',
      marginBottom: '2rem',
    },
    phone: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '1.75rem',
      background: 'rgba(0, 0, 0, 0.25)',
      padding: '.1rem 1rem',
      fontWeight: 'normal',
      fontFamily: 'Lato',
      color: '#fff',
      fontSize: '0.9375rem',
    },
    phoneIcon: {
      marginRight: '.5rem',
    },
    chat: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '1.75rem',
      background: '#43CEA2',
      padding: '.1rem 1rem',
      fontWeight: 'normal',
      fontFamily: 'Lato',
      color: '#fff',
      fontSize: '0.9375rem',
      marginLeft: '0.75rem',
    },
    chatIcon: {
      marginRight: '.5rem',
    },
  })
);

interface IProps {}

const JobsDrawer: React.FC<IProps> = (props) => {
  const classes = useStyles();
  const status = useSelector((state: AppState) => state.common.drawerStatus);
  const content = useSelector((state: AppState) => state.common.drawerContent);
  console.log(content, '=====');
  const dispatch = useDispatch();
  const closeDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
    dispatch(toggleDrawer(false));
  };

  if (!content) return <div />;
  const {
    createdAt,
    vendorStatusDates,
    address,
    description,
    vendor: {
      name: vendorName,
      phoneNumber,
      service: { name },
    },
  } = content;

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
            {name}
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.titleWrapper}>
          <Grid item xs={10}>
            <Typography variant='body2' className={classes.subtitle}>
              {vendorName}
            </Typography>
            <Grid item xs={6} className={classes.contactWrapper}>
              <Typography variant='body1' className={classes.phone}>
                <img
                  src={phoneIcon}
                  alt='phone'
                  className={classes.phoneIcon}
                />
                {phoneNumber || 'Not available'}
              </Typography>
              <Typography variant='body1' className={classes.chat}>
                <img src={chat} alt='chat' className={classes.chatIcon} /> Chat
                now
              </Typography>
            </Grid>
            <Typography variant='body2' className={classes.link}>
              <span
                className={classes.indicator}
                style={{ background: '#FF8515' }}
              />
              <span style={{ marginLeft: '.5rem' }}>
                Contacted on {moment(createdAt).format('MMMM Do YYYY, h:mm a')}
              </span>
            </Typography>
            <Typography variant='body2' className={classes.link}>
              <span
                className={classes.indicator}
                style={{ background: '#574497' }}
              />
              <span style={{ marginLeft: '.5rem' }}>
                {vendorStatusDates
                  ? `Started on{' '}
                ${moment('20111031', 'YYYYMMDD').format(
                  'MMMM Do YYYY, h:mm a'
                )}`
                  : 'Not in progress'}
              </span>
            </Typography>
            {vendorStatusDates && (
              <Typography variant='body2' className={classes.link}>
                <span
                  className={classes.indicator}
                  style={{ background: 'rgba(0, 155, 106)' }}
                />
                <span style={{ marginLeft: '.5rem' }}>
                  Completed on{' '}
                  {moment('20111031', 'YYYYMMDD').format(
                    'MMMM Do YYYY, h:mm a'
                  )}
                </span>
              </Typography>
            )}
          </Grid>
          <Typography variant='body2' className={classes.money}>
            {formatMoney(40000)}
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.desc}>
          <Collapsible title='ORDER DESCRIPTION' body={description} />
        </Grid>
        <Grid item xs={12} className={classes.desc}>
          <Collapsible
            title='INVOICE'
            download
            body='Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sequi
            quidem nesciunt asperiores dolor harum vel nam inventore itaque,
            laudantium, in saepe dignissimos atque aliquam tempora nihil
            aspernatur ipsum fugiat?'
          />
        </Grid>
        <Grid item xs={12} className={classes.desc}>
          <Collapsible title='DELIVERY ADDRESS' body={address} />
        </Grid>
        <Grid item xs={12} className={classes.desc}>
          <Collapsible title='REVIEW'>
            <Reviews />
          </Collapsible>
        </Grid>
      </Grid>
    </Drawer>
  );
};

export default JobsDrawer;

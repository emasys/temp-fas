import React, { useEffect } from 'react';
import { usePaystackPayment } from 'react-paystack';
import {
  Grid,
  makeStyles,
  Theme,
  createStyles,
  Drawer,
  Typography,
  Button,
  IconButton,
} from '@material-ui/core';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../lib/initialState';
import { toggleDrawer, updateInvoiceValue } from '../redux/actions/common';
import { formatMoney } from '../util';
import Collapsible from './Collapsible';
import Reviews from './Reviews';
import phoneIcon from '../assets/phone.svg';
import chat from '../assets/chat.svg';
import { CloseRounded } from '@material-ui/icons';
import Invoice from './Invoice';
import { getInvoice } from '../redux/selectors/common';
import config from '../config';
import { handleJobPayment } from '../api';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      minWidth: '80%',
      maxWidth: '80%',
      padding: '2% 4%',
      [theme.breakpoints.down('xs')]: {
        maxWidth: '90%',
        padding: '4%',
      },
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
      [theme.breakpoints.down('xs')]: {
        fontSize: '0.7rem',
      },
    },
    subtitle: {
      color: '#292929',
      fontSize: '1.5rem',
      fontWeight: 600,
      textTransform: 'uppercase',
      marginBottom: '.4rem',
      [theme.breakpoints.down('xs')]: {
        fontSize: '0.8rem',
      },
    },
    money: {
      fontSize: '1.5rem',
      fontWeight: 600,
      color: 'rgb(87, 68, 151)',
      [theme.breakpoints.down('xs')]: {
        fontSize: '0.8rem',
      },
    },
    net: {
      fontSize: '.9rem',
      fontWeight: 600,
      color: '#43CEA2',
      [theme.breakpoints.down('xs')]: {
        fontSize: '0.7rem',
      },
    },
    link: {
      fontWeight: 'bold',
      fontSize: '.8rem',
      position: 'relative',
      marginBottom: '.4rem',
      [theme.breakpoints.down('xs')]: {
        fontSize: '0.7rem',
        display: 'flex',
        alignItems: 'center',
      },
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
      display: 'flex',
      position: 'relative',
      justifyContent: 'space-between',
      alignItems: 'center',
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
      [theme.breakpoints.down('xs')]: {
        position: 'unset',
      },
    },
    contactWrapper: {
      display: 'flex',
      alignItems: 'flex-end',
      marginBottom: '1rem',
    },
    phone: {
      borderRadius: '1.113rem',
      background: 'rgba(0,0,0,0.25)',
      color: '#fff',
      padding: 0,
      minWidth: '9rem',
      fontSize: '0.6875rem',
      minHeight: '2rem',
      '&:hover': {
        background: 'rgba(0,0,0,0.25)',
      },
      [theme.breakpoints.down('xs')]: {
        minHeight: '1.5rem',
        minWidth: '6rem',
      },
    },
    phoneIcon: {
      marginRight: '.5rem',
      [theme.breakpoints.down('xs')]: {
        display: 'none',
      },
    },
    chat: {
      borderRadius: '1.113rem',
      color: '#fff',
      padding: 0,
      minWidth: '9rem',
      fontSize: '0.6875rem',
      minHeight: '2rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#43CEA2',
      marginLeft: '0.75rem',
      '&:hover': {
        background: '#43CEA2',
      },
      [theme.breakpoints.down('xs')]: {
        minHeight: '1.5rem',
        minWidth: '5rem',
      },
    },
    chatIcon: {
      marginRight: '.5rem',
      [theme.breakpoints.down('xs')]: {
        display: 'none',
      },
    },
    payment: {
      borderRadius: '1.113rem',
      color: '#fff',
      padding: 0,
      minWidth: '9rem',
      fontSize: '0.6875rem',
      minHeight: '2rem',
      display: 'flex',
      marginTop: '.8rem',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'rgb(87, 68, 151)',
      '&:hover': {
        background: 'rgb(87, 68, 151)',
      },
      [theme.breakpoints.down('xs')]: {
        minHeight: '1.5rem',
        minWidth: '5rem',
      },
    },
    close: {
      position: 'absolute',
      right: -16,
      top: -18,
    },
  })
);

interface IProps {}

const JobsDrawer: React.FC<IProps> = (props) => {
  const classes = useStyles();
  const { total, netProceed, fee } = useSelector((state: AppState) =>
    getInvoice(state)
  );
  const status = useSelector((state: AppState) => state.common.drawerStatus);
  const { email } = useSelector((state: AppState) => state.auth);
  const content = useSelector((state: AppState) => state.common.drawerContent);
  const isVendor = !!content?.customer;
  const dispatch = useDispatch();
  const closeDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
    dispatch(toggleDrawer(false));
  };
  const configData = {
    reference: `${new Date().getTime()}`,
    amount: total?.value * 100,
    publicKey: config.paystack_key,
    email
  };
  const payment = usePaystackPayment(configData);

  useEffect(() => {
    if (content?.invoice) {
      dispatch(updateInvoiceValue(content?.invoice));
    }
  }, [content?.invoice]);
  if (!content) return <div />;
  const {
    createdAt,
    vendorStatusDates,
    address,
    id,
    description,
    customer,
    invoice,
    vendor: {
      name: vendorName,
      phoneNumber,
      service: { name },
    },
  } = content;

  const onSuccess = async (token) => {
    const data = await handleJobPayment(token.transaction);
    console.log(data, '=====', token);
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
            {name}
          </Typography>
          <IconButton className={classes.close} onClick={closeDrawer}>
            <CloseRounded />
          </IconButton>
        </Grid>
        <Grid item xs={12} className={classes.titleWrapper}>
          <Grid item xs={10}>
            <Typography variant='body2' className={classes.subtitle}>
              {customer?.fullName || vendorName}
            </Typography>
            {!isVendor && (
              <>
                <Grid item xs={6} className={classes.contactWrapper}>
                  <Button variant='text' className={classes.phone}>
                    <img
                      src={phoneIcon}
                      className={classes.phoneIcon}
                      alt='pdf download'
                    />
                    {phoneNumber || 'Not available'}
                  </Button>
                  <Button variant='text' className={classes.chat}>
                    <img src={chat} alt='chat' className={classes.chatIcon} />{' '}
                    Chat now
                  </Button>
                </Grid>
              </>
            )}
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
            {total?.value && (
              <Grid item xs={12}>
                <Button
                  variant='contained'
                  className={classes.payment}
                  onClick={() => payment(onSuccess)}
                >
                  Make payment
                </Button>
              </Grid>
            )}
          </Grid>
          <div>
            <Typography variant='body2' className={classes.money}>
              {invoice
                ? formatMoney(isVendor ? netProceed?.value : total?.value)
                : '--'}
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} className={classes.desc}>
          <Collapsible title='DESCRIPTION' body={description} />
        </Grid>
        <Grid item xs={12} className={classes.desc}>
          <Collapsible title='INVOICE' download={!!invoice}>
            <Invoice />
          </Collapsible>
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

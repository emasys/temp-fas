/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from 'react';
import { usePaystackPayment } from 'react-paystack';
import DateFnsUtils from '@date-io/date-fns';
import {
  Grid,
  makeStyles,
  Theme,
  createStyles,
  Drawer,
  Typography,
  Button,
  IconButton,
  useMediaQuery,
  capitalize,
} from '@material-ui/core';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../lib/initialState';
import { toggleDrawer, updateInvoiceValue } from '../redux/actions/common';
import { formatMoney, formatPhoneNumber } from '../util';
import Collapsible from './Collapsible';
import Review from './Review';
import {
  CloseRounded,
  NavigateNextRounded,
  PhoneRounded,
  WhatsApp,
} from '@material-ui/icons';
import Invoice from './Invoice';
import { getInvoice } from '../redux/selectors/common';
import config from '../config';
import { handleJobPayment, updateVendorStatus, updateJobDate } from '../api';
import { fetchVendorJobs, makeJobPayment } from '../redux/actions/jobs';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import Link from 'next/link';
import { useRouter } from 'next/router';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      maxWidth: '50rem',
      padding: '2% 4%',
      [theme.breakpoints.down('xs')]: {
        maxWidth: '100vw',
        overflowX: 'hidden',
        padding: '4%',
      },
    },
    datePicker: {
      fontSize: '1rem',
      color: '#636363',
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
      display: 'flex',
      alignItems: 'center',
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
        alignItems: 'flex-start',
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
        marginTop: '2px',
      },
    },
    contactWrapper: {
      display: 'flex',
      alignItems: 'flex-end',
      marginBottom: '1rem',
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
        alignItems: 'flex-start',
      },
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
        color: '#292929',
        minHeight: 'auto',
        background: 'transparent',
        minWidth: 'auto',
      },
    },
    phoneIcon: {
      background: '#f7f3f3',
      padding: '.5rem',
      marginLeft: '1rem',
      [theme.breakpoints.down('xs')]: {
        padding: '.2rem',
      },
    },
    wAIcon: {
      background: '#43CEA2',
      padding: '.5rem',
      marginLeft: '1rem',
      '&:hover': {
        background: '#43CEA2',
      },
      [theme.breakpoints.down('xs')]: {
        padding: '.2rem',
      },
    },
    chat: {
      borderRadius: '1.113rem',
      color: '#fff',
      padding: 0,
      minWidth: '9rem',
      fontSize: '0.6875rem',
      minHeight: '2rem',
      // display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#43CEA2',
      marginLeft: '0.75rem',
      display: 'none',
      '&:hover': {
        background: '#43CEA2',
      },
      [theme.breakpoints.down('xs')]: {
        minHeight: '1.5rem',
        minWidth: 'auto',
        display: 'none',
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
      [theme.breakpoints.down('xs')]: {
        minHeight: '1.5rem',
        minWidth: '7rem',
      },
    },
    close: {
      position: 'absolute',
      right: -16,
      top: -18,
    },
    dateLabel: {
      color: '#181818',
      marginBottom: '.5rem',
    },
    nextWrapper: {
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
    },
    next: {
      fontSize: '2rem',
      marginLeft: '1rem',
    },
    contact: {
      display: 'flex',
      alignItems: 'center',
    },
    contactIcon: {
      color: '#43cea2',
    },
  }),
);

const JobsDrawer: React.FC = () => {
  const classes = useStyles();
  const router = useRouter();
  const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down('xs'));
  const { total, netProceed } = useSelector((state: AppState) =>
    getInvoice(state),
  );
  const status = useSelector((state: AppState) => state.common.drawerStatus);
  const { email } = useSelector((state: AppState) => state.auth);
  const content = useSelector((state: AppState) => state.common.drawerContent);
  const [selectedDate, setSelectedDate] = React.useState(
    content?.dueDate ? content?.dueDate : new Date(),
  );
  const isVendor = !!content?.customer;
  const dispatch = useDispatch();

  const closeDrawer = (event: any) => {
    event.preventDefault();
    dispatch(toggleDrawer(false));
    const url = `/dashboard`;
    router.push(url, undefined, { shallow: true });
  };

  const configData = {
    reference: content?.id,
    amount: total?.value * 100,
    publicKey: config.paystack_key,
    email,
  };
  const payment = usePaystackPayment(configData);

  useEffect(() => {
    if (content?.invoice) {
      dispatch(updateInvoiceValue(content?.invoice));
    }
  }, [content?.invoice]);

  useEffect(() => {
    if (content?.dueDate) setSelectedDate(content?.dueDate);
  }, [content?.dueDate]);
  if (!content) return <div />;

  const {
    createdAt,
    vendorStatusDates,
    address,
    id,
    description,
    customer,
    invoice,
    dueDate,
    vendor: {
      id: vendorId,
      name: vendorName,
      phoneNumber,
      service: { name, id: serviceId },
    },
    review,
    stage,
  } = content;

  const onSuccess = async () => {
    const data = await handleJobPayment(id);
    dispatch(makeJobPayment(data));
  };

  const startJob = async () => {
    const data = await updateVendorStatus(
      { status: vendorStatusDates?.startedDate ? 'completed' : 'started' },
      id,
      vendorId,
    );
    dispatch(fetchVendorJobs(vendorId));
    // temp
    dispatch(makeJobPayment(data));
  };

  const handleDateChange = async (date: Date | null) => {
    setSelectedDate(date);
    await updateJobDate({ date: moment(date).format() }, id);
  };

  return (
    <Drawer
      anchor="right"
      classes={{
        paper: classes.container,
      }}
      open={status}
      onClose={closeDrawer}
    >
      <Grid container>
        <Grid item xs={12} className={classes.status}>
          <Typography variant="body2" className={classes.title}>
            <Link href={`/services/${serviceId}`}>
              <a>{name}</a>
            </Link>
          </Typography>
          <IconButton className={classes.close} onClick={closeDrawer}>
            <CloseRounded onClick={closeDrawer} />
          </IconButton>
        </Grid>
        <Grid item xs={12} className={classes.titleWrapper}>
          <Grid item xs={10}>
            <Typography variant="body2" className={classes.subtitle}>
              {!customer?.fullName ? (
                <Link href={`/vendor/${vendorId}`}>
                  <a className={classes.nextWrapper}>
                    {vendorName}
                    <NavigateNextRounded className={classes.next} />
                  </a>
                </Link>
              ) : (
                customer?.fullName
              )}
              {/* {!isVendor && (
                <>
                  <IconButton
                    className={classes.phoneIcon}
                    href={`tel:${phoneNumber}`}
                  >
                    <PhoneRounded style={{ fontSize: '1rem' }} />
                  </IconButton>
                  <IconButton
                    className={classes.wAIcon}
                    href={`http://api.whatsapp.com/send?phone=+234${phoneNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsApp style={{ fontSize: '1rem', color: '#fff' }} />
                  </IconButton>
                </>
              )} */}
            </Typography>
            {!isVendor && (
              <Typography variant="body2" className={classes.link}>
                <span
                  className={classes.indicator}
                  style={{ background: 'rgba(0, 155, 106)' }}
                />
                <span style={{ marginLeft: '.5rem' }}>
                  Contact vendor {formatPhoneNumber(phoneNumber)}
                </span>
              </Typography>
            )}
            {!!total?.value && content?.invoice && (
              <Grid item xs={12}>
                {isVendor ? (
                  <Button
                    variant="contained"
                    className={classes.payment}
                    disabled={!!vendorStatusDates?.completedDate}
                    onClick={startJob}
                  >
                    {vendorStatusDates?.startedDate
                      ? 'Complete Job'
                      : 'Start Job'}
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    disabled={!!vendorStatusDates?.paymentDate}
                    className={classes.payment}
                    onClick={() => payment(onSuccess)}
                  >
                    Make payment
                  </Button>
                )}
              </Grid>
            )}
          </Grid>
          <div>
            <Typography variant="body2" className={classes.money}>
              {invoice
                ? formatMoney(isVendor ? netProceed?.value : total?.value)
                : '--'}
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} className={classes.desc}>
          <Collapsible title="ACTIVITY" noDefaultOpen>
            <Grid>
              <Typography variant="body2" className={classes.link}>
                <span
                  className={classes.indicator}
                  style={{ background: '#FF8515' }}
                />
                <span style={{ marginLeft: '.5rem' }}>
                  {customer ? customer.fullName : 'You'} booked{' '}
                  {capitalize(vendorName)} on{' '}
                  {moment(createdAt).format('MMMM Do YYYY')}
                </span>
              </Typography>
              {vendorStatusDates && (
                <Typography variant="body2" className={classes.link}>
                  <span
                    className={classes.indicator}
                    style={{ background: '#574497' }}
                  />
                  <span style={{ marginLeft: '.5rem' }}>
                    {`${customer ? customer.fullName : 'You'} made payment on
                ${moment(vendorStatusDates.paymentDate).format(
                  'MMMM Do YYYY',
                )}`}
                  </span>
                </Typography>
              )}
              <Typography variant="body2" className={classes.link}>
                <span
                  className={classes.indicator}
                  style={{ background: '#574497' }}
                />
                <span style={{ marginLeft: '.5rem' }}>
                  {vendorStatusDates?.startedDate
                    ? `${capitalize(vendorName)} started this project on
                ${moment(vendorStatusDates.startedDate).format('MMMM Do YYYY')}`
                    : 'Not in progress'}
                </span>
              </Typography>
              {vendorStatusDates?.completedDate && (
                <Typography variant="body2" className={classes.link}>
                  <span
                    className={classes.indicator}
                    style={{ background: 'rgba(0, 155, 106)' }}
                  />
                  <span style={{ marginLeft: '.5rem' }}>
                    Completed on{' '}
                    {moment(vendorStatusDates?.completedDate).format(
                      'MMMM Do YYYY',
                    )}
                  </span>
                </Typography>
              )}
            </Grid>
          </Collapsible>
        </Grid>
        <Grid item xs={12} className={classes.desc}>
          <Collapsible title="INVOICE" download={true}>
            <Invoice />
          </Collapsible>
        </Grid>
        <Grid item xs={12} className={classes.desc}>
          <Collapsible title="DESCRIPTION" body={description} />
        </Grid>
        <Grid item xs={12} className={classes.desc}>
          <Collapsible
            title={`DUE DATE - ${
              dueDate ? moment(dueDate).format('MMMM Do YYYY') : 'Not set'
            }`}
            noDefaultOpen
          >
            {!isVendor && (
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Typography variant="body2" className={classes.dateLabel}>
                  You can still modify the due date
                </Typography>
                <DatePicker
                  autoOk
                  minDate={dueDate ? dueDate : new Date()}
                  disableToolbar={isMobile}
                  orientation={isMobile ? 'portrait' : 'landscape'}
                  variant="static"
                  openTo="date"
                  className={classes.datePicker}
                  value={selectedDate}
                  onChange={handleDateChange}
                />
              </MuiPickersUtilsProvider>
            )}
          </Collapsible>
        </Grid>
        <Grid item xs={12} className={classes.desc}>
          <Collapsible title="DELIVERY ADDRESS" body={address} />
        </Grid>
        <Grid item xs={12} className={classes.desc}>
          <Collapsible title="REVIEW">
            <Review
              value={review}
              isCustomer={!isVendor}
              jobId={id}
              canPost={stage === 'done'}
            />
          </Collapsible>
        </Grid>
      </Grid>
    </Drawer>
  );
};

export default JobsDrawer;

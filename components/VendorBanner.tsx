import React from 'react';
import {
  Grid,
  Typography,
  createStyles,
  makeStyles,
  Theme,
  Button,
} from '@material-ui/core';
import { formatMoney } from '../util';
import phoneIcon from '../assets/phone.svg';
import chat from '../assets/chat.svg';
import bannerIcon from '../assets/banner.svg';
import { useSelector } from 'react-redux';
import { AppState } from '../lib/initialState';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    container: {
      position: 'relative',
      padding: '2rem 2.75rem',
      width: '100%',
      display: 'flex',
      background: 'linear-gradient(93.74deg, #43CEA2 -0.25%, #3E72A3 97.83%)',
      height: '14.4375rem',
      marginTop: '1.75rem',
      [theme.breakpoints.down('sm')]: {
        height: '22rem',
        paddingTop: '1rem',
      },
      [theme.breakpoints.down('xs')]: {
        padding: '1rem .5rem',
        height: '10rem',
      },
    },
    rateWrapper: {
      display: 'flex',
      alignSelf: 'flex-start',
      justifyContent: 'flex-end',
    },
    rate: {
      padding: '.5rem',
      fontWeight: 500,
      color: '#fff',
      fontSize: '0.9375rem',
      background: 'rgba(0, 0, 0, 0.25)',
      borderRadius: '0.1875rem',
      [theme.breakpoints.down('xs')]: {
        fontSize: '0.7rem',
      },
    },
    rateText: {
      fontSize: '0.625rem',
    },
    contactWrapper: {
      display: 'flex',
      alignItems: 'flex-end',
      // [theme.breakpoints.down('xs')]: {
      //   flexDirection: 'column',
      //   alignItems: 'flex-start'
      // },
    },
    phone: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '1.75rem',
      background: 'rgba(0, 0, 0, 0.25)',
      padding: '.5rem 1.5rem',
      fontWeight: 'normal',
      fontFamily: 'Lato',
      color: '#fff',
      fontSize: '0.9375rem',
      [theme.breakpoints.down('xs')]: {
        fontSize: '0.7rem',
        padding: '.3rem 1rem',
      },
    },
    phoneIcon: {
      marginRight: '.5rem',
      [theme.breakpoints.down('xs')]: {
        display: 'none',
      },
    },
    chat: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '1.75rem',
      background: '#43CEA2',
      fontWeight: 'normal',
      fontFamily: 'Lato',
      color: '#fff',
      minHeight: '1rem',
      fontSize: '0.9375rem',
      marginLeft: '0.75rem',
      [theme.breakpoints.down('xs')]: {
        fontSize: '0.7rem',
        padding: '.3rem 0',
        minWidth: '5rem',
        maxHeight: '1.7rem',
      },
    },
    chatIcon: {
      marginRight: '.5rem',
      [theme.breakpoints.down('xs')]: {
        display: 'none',
      },
    },
    bannerIcon: {
      opacity: '.1',
      position: 'absolute',
      right: '22rem',
      bottom: '-2rem',
      [theme.breakpoints.down('sm')]: {
        right: '2rem',
      },
      [theme.breakpoints.down('xs')]: {
        display: 'none',
      },
    },
  }),
);

interface Props {
  rate: number;
  phone: string;
}
const VendorBanner: React.FC<Props> = ({ rate, phone }) => {
  const classes = useStyles();
  const vendorObj = useSelector((state: AppState) => state.vendor.activeVendor);
  return (
    <Grid
      container
      className={classes.container}
      style={{
        backgroundImage: vendorObj.headerImageUrl
          ? `url(${vendorObj.headerImageUrl})`
          : `linear-gradient(93.74deg, #43CEA2 -0.25%, #3E72A3 97.83%)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      {!vendorObj.headerImageUrl && (
        <img
          src={bannerIcon}
          alt="banner icon"
          className={classes.bannerIcon}
        />
      )}
      <Grid item xs={12} className={classes.rateWrapper}>
        <Typography variant="body2" className={classes.rate}>
          {formatMoney(rate)} per job
        </Typography>
      </Grid>
      <Grid item xs={12} sm={7} md={6} className={classes.contactWrapper}>
        <Typography variant="body1" className={classes.phone}>
          <img src={phoneIcon} alt="phone" className={classes.phoneIcon} />
          <a href={`tel:${phone}`}>{phone || 'Not available'}</a>
        </Typography>
        <Button
          variant="text"
          className={classes.chat}
          href={`http://api.whatsapp.com/send?phone=+234${phone}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={chat} alt="chat" className={classes.chatIcon} /> Chat now
        </Button>
      </Grid>
    </Grid>
  );
};

export default VendorBanner;

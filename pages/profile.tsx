import React, { ReactElement, useEffect } from 'react';
import VendorLayout from '../components/VendorLayout';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../lib/initialState';
import { handleAuthModal } from '../redux/actions/common';
import {
  makeStyles,
  Theme,
  createStyles,
  Grid,
  Typography,
  Box,
  Tabs,
  Tab,
} from '@material-ui/core';
import JobSearch from '../components/JobSearch';
import { fetchUserJobs, fetchVendorJobs } from '../redux/actions/jobs';
import JobsRow from '../components/JobsRow';
import { getUserJobs } from '../redux/selectors/jobs';
import JobsDrawer from '../components/jobsDrawer';
import { getVendorStatus } from '../redux/selectors/vendors';
import { getInvoice } from '../redux/selectors/common';
import {
  PersonRounded,
  AccountBalanceRounded,
  PaymentRounded,
  SettingsRounded,
} from '@material-ui/icons';
import UserInfo from '../components/UserInfo';
import BankDetails from '../components/BankDetails';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {},
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      display: 'flex',
      height: 'auto',
      minHeight: '100vh',
    },
    tabs: {
      borderRight: `1px solid ${theme.palette.divider}`,
      [theme.breakpoints.down('xs')]: {
        width: '3rem'
      },
    },
    search: {
      margin: '2rem 0',
    },
    wrapper: {
      minHeight: '100vh',
      paddingTop: '5rem',
      background:
        'linear-gradient(90.81deg, rgba(67, 206, 162, 0.1) 0.44%, rgba(24, 90, 157, 0.1) 98.43%);',
    },
    blur: {
      '-webkit-filter': 'blur(1rem)',
      '-moz-filter': 'blur(1rem)',
      '-o-filter': 'blur(1rem)',
      '-ms-filter': 'blur(1rem)',
      filter: 'blur(1rem)',
    },
    tabIcon: {
      marginRight: '.5rem',
      [theme.breakpoints.down('xs')]: {
        marginRight: '3rem'
      },
    },
    tabInner: {
      textTransform: 'none',
      display: 'flex',
      flexDirection: 'row',
      color: '#292929',
      // margin: '.1rem 0',
      letterSpacing: '.1rem',
      minHeight: '2.5rem',
      justifyContent: 'flex-start',
      alignItems: 'center',
      width: '100%',
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
      [theme.breakpoints.down('xs')]: {
        fontSize: '.8rem',
        // width: '50%'
      },
    },
    tabIndicator: {
      background: '#FF8515',
      borderRadius: '10rem',
    },
    tabContainer: {
      marginTop: '2rem',
    },
    content: {
      width: '90%',
      [theme.breakpoints.down('sm')]: {
        width: '80%'
      },
      [theme.breakpoints.down('xs')]: {
        width: '90%'
      },
    }
  })
);

interface Props {}

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const classes = useStyles();
  const { children, value, index, ...other } = props;

  return (
    <div
      className={classes.content}
      role='tabpanel'
      hidden={value !== index}
      id={`profile-tabpanel-${index}`}
      aria-labelledby={`profile-tab-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `profile-tab-${index}`,
    'aria-controls': `profile-tabpanel-${index}`,
  };
}

export default function Profile({}: Props): ReactElement {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { auth, id } = useSelector((state: AppState) => state.auth);
  const { allJobs } = useSelector((state: AppState) => getUserJobs(state));
  const ownVendor = useSelector((state: AppState) => getVendorStatus(state));
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  useEffect(() => {
    if (!auth) {
      dispatch(handleAuthModal(true));
    }
    if (auth) {
      dispatch(fetchUserJobs());
    }
  }, [auth]);

  return (
    <div className={auth ? classes.container : classes.blur}>
      <VendorLayout title={'User profile'}>
        <div className={classes.root}>
          <Tabs
            orientation='vertical'
            value={value}
            classes={{
              flexContainer: classes.tabContainer,
              indicator: classes.tabIndicator,
            }}
            onChange={handleChange}
            aria-label='profile tabs'
            className={classes.tabs}
          >
            <Tab
              label='User info'
              {...a11yProps(0)}
              classes={{
                wrapper: classes.tabInner,
              }}
              icon={<PersonRounded className={classes.tabIcon} />}
              className={classes.tabInner}
            />
            <Tab
              label='Bank details'
              {...a11yProps(1)}
              classes={{
                wrapper: classes.tabInner,
              }}
              icon={<AccountBalanceRounded className={classes.tabIcon} />}
              className={classes.tabInner}
            />
            <Tab
              label='Payment'
              {...a11yProps(2)}
              classes={{
                wrapper: classes.tabInner,
              }}
              icon={<PaymentRounded className={classes.tabIcon} />}
              className={classes.tabInner}
            />
            <Tab
              label='Settings'
              {...a11yProps(3)}
              classes={{
                wrapper: classes.tabInner,
              }}
              icon={<SettingsRounded className={classes.tabIcon} />}
              className={classes.tabInner}
            />
          </Tabs>
          <TabPanel value={value} index={0}>
            <UserInfo />
          </TabPanel>
          <TabPanel value={value} index={1}>
           <BankDetails />
          </TabPanel>
          <TabPanel value={value} index={2}>
            payment
          </TabPanel>
          <TabPanel value={value} index={3}>
            settings
          </TabPanel>
        </div>
      </VendorLayout>
    </div>
  );
}

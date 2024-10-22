import React from 'react';
import {
  Grid,
  createStyles,
  makeStyles,
  Theme,
  Typography,
  Button,
} from '@material-ui/core';
import next from '../assets/next.svg';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../lib/initialState';
import { toggleModal, handleAuthModal } from '../redux/actions/common';
import { getInvoice } from '../redux/selectors/common';
import InvoiceTable from './InvoiceForm/InvoiceTable';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    invoice: {
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
      '&:hover': {
        background: '#43CEA2',
      },
    },
  })
);

interface Props {}
const Invoice: React.FC<Props> = (props) => {
  const content = useSelector((state: AppState) => state.common.drawerContent);
  const isVendor = !!content?.customer;
  const dispatch = useDispatch();
  const classes = useStyles();
  const handleToggle = () => {
    dispatch(toggleModal('invoice'));
    dispatch(handleAuthModal(true));
  };
  return (
    <>
      {!content?.invoice ? (
        <>
          {isVendor ? (
            <Button
              variant='contained'
              className={classes.invoice}
              onClick={handleToggle}
            >
              Create invoice
            </Button>
          ) : (
            <Typography variant='body2'>Awaiting invoice</Typography>
          )}
        </>
      ) : (
        <div>
          <InvoiceTable />
          {isVendor && content?.vendorStatus !== 'completed' && (
            <Button
              variant='contained'
              className={classes.invoice}
              onClick={handleToggle}
            >
              Edit invoice
            </Button>
          )}
        </div>
      )}
    </>
  );
};

export default Invoice;

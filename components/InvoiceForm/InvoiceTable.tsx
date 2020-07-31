import React from 'react';
import {
  createStyles,
  makeStyles,
  Theme,
  Typography,
  Grid,
  withStyles,
} from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { formatMoney } from '../../util';
import { useSelector } from 'react-redux';
import { getInvoice } from '../../redux/selectors/common';
import { AppState } from '../../lib/initialState';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: '100%',
      marginBottom: '2rem',
      boxShadow: 'none',
    },
    table: {
      minWidth: 400,
      [theme.breakpoints.down('sm')]: {
        minWidth: '100%',
      },
    },
    wrapper: {
      marginTop: 0,
      padding: '.5rem 0',
    },
    item: {
      color: '#101010',
      fontSize: 18,
    },
    total: {
      // color: '#fff',
      fontWeight: 'bold',
    },
    value: {
      color: '#101010',
      fontSize: 18,
      fontWeight: 600,
    },
  })
);

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      // backgroundColor: '#43CEA2',
      // color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  })
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  })
)(TableRow);

const TotalTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      // backgroundColor: '#43CEA2',
    },
  })
)(TableRow);

interface Props {}

const InvoiceTable: React.FC<Props> = (props) => {
  const classes = useStyles();
  const {
    total,
    netProceed,
    fee,
    allEntries,
  } = useSelector((state: AppState) => getInvoice(state));
  const content = useSelector((state: AppState) => state.common.drawerContent);
  const isVendor = !!content?.customer;
  return (
    <TableContainer className={classes.container} component={Paper}>
      <Table className={classes.table} aria-label='customized table'>
        <TableHead>
          <TableRow>
            <StyledTableCell>Item(s)</StyledTableCell>
            <StyledTableCell align='right'>Amount</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allEntries?.map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component='th' scope='row'>
                {row?.item}
              </StyledTableCell>
              <StyledTableCell align='right'>
                {formatMoney(row?.value)}
              </StyledTableCell>
            </StyledTableRow>
          ))}
          <TotalTableRow>
            <StyledTableCell
              component='th'
              scope='row'
              className={classes.total}
            >
              {total.item}
            </StyledTableCell>
            <StyledTableCell align='right' className={classes.total}>
              {formatMoney(total.value)}
            </StyledTableCell>
          </TotalTableRow>
          {isVendor && (
            <TotalTableRow>
              <StyledTableCell
                component='th'
                scope='row'
                className={classes.total}
              >
                {fee.item}
              </StyledTableCell>
              <StyledTableCell align='right' className={classes.total}>
                {formatMoney(fee.value)}
              </StyledTableCell>
            </TotalTableRow>
          )}
          {isVendor && (
            <TotalTableRow>
              <StyledTableCell
                component='th'
                scope='row'
                className={classes.total}
              >
                {netProceed.item}
              </StyledTableCell>
              <StyledTableCell align='right' className={classes.total}>
                {formatMoney(netProceed.value)}
              </StyledTableCell>
            </TotalTableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default InvoiceTable;

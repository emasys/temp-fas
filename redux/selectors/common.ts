import { createSelector } from 'reselect';
import { AppState } from '../../lib/initialState';

const invoice = (state: AppState) => state.common.invoiceValues;
export const getInvoice = createSelector(invoice, (data) => {
  const allEntries = data.map(({ item, value, id }) => {
    return {
      id,
      value: value,
      item,
    };
  });
  const total = {
    id: 'total',
    value: data.reduce((prev, curr) => prev + Number(curr.value), 0),
    item: 'Total',
  };
  const fee = {
    id: 'net',
    value: total.value * 0.02,
    item: 'Transaction fee',
  };
  const netProceed = {
    id: 'net',
    value: total.value - fee.value,
    item: 'Net proceed',
  };
  return {
    allEntries,
    fee,
    total,
    netProceed,
  };
});

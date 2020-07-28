import { createSelector } from 'reselect';
import { AppState } from '../../lib/initialState';
import moment from 'moment';

const jobs = (state: AppState) => state.jobs;
const vendor = (state: AppState) => state.vendor.activeVendor;
const orders = (state: AppState) => state.orders;

const jobColorMapper = {
  not_started: '#574497',
  started: '#574497',
  completed: '#43CEA2',
  rejected: '#fba351',
  accepted: 'rgba(0, 155, 106)',
};

const formatDate = (date: string = '') => {
  return moment(date).fromNow();
}

export const getUserJobs = createSelector(
  [jobs, vendor, orders],
  (job, vendor, orders) => {
    const isBooked = job.find(
      ({ vendorId, vendorStatus }) =>
        vendor.id === vendorId && vendorStatus !== 'completed'
    );
    const allJobs = job.map((item) => {
      const jobStatusMapper = {
        not_started: 'Not started',
        started: `Started ${formatDate(item.vendorStatusDates?.startedDate)}`,
        completed: `Completed ${formatDate(item.vendorStatusDates?.completedDate)}`,
        rejected: 'Rejected',
        accepted: 'Accepted',
      };
      return {
        ...item,
        stage: item.vendorStatusDates?.paymentDate ? 'Payment completed' : 'Payment not completed',
        status: jobStatusMapper[item.vendorStatus],
        color: jobColorMapper[item.vendorStatus],
      };
    });
    let allOrders = orders.map((item) => {
      const jobStatusMapper = {
        not_started: 'Not started',
        started: `Started ${formatDate(item.vendorStatusDates?.startedDate)}`,
        completed: `Completed ${formatDate(item.vendorStatusDates?.completedDate)}`,
        rejected: 'Rejected',
        accepted: 'Accepted',
      };
      return {
        ...item,
        stage: item.vendorStatusDates?.paymentDate ? 'Payment completed' : 'Payment not completed',
        status: jobStatusMapper[item.vendorStatus],
        color: jobColorMapper[item.vendorStatus],
      };
    });
    return { isBooked, allJobs, allOrders };
  }
);

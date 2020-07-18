import { createSelector } from 'reselect';
import { AppState } from '../../lib/initialState';

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

export const getUserJobs = createSelector([jobs, vendor, orders], (job, vendor, orders) => {
  const isBooked = job.find(({ vendorId }) => vendor.id === vendorId);
  const allJobs = job.map((item) => {
    const jobStatusMapper = {
      not_started: 'Not started',
      started: 'Started',
      completed: `Completed`,
      rejected: 'Rejected',
      accepted: 'Accepted',
    };
    return {
      ...item,
      status: jobStatusMapper[item.vendorStatus],
      color: jobColorMapper[item.vendorStatus]
    };
  });
  let allOrders = orders.map((item) => {
    const jobStatusMapper = {
      not_started: 'Not started',
      started: 'Started',
      completed: `Completed`,
      rejected: 'Rejected',
      accepted: 'Accepted',
    };
    return {
      ...item,
      status: jobStatusMapper[item.vendorStatus],
      color: jobColorMapper[item.vendorStatus]
    };
  });
  return { isBooked, allJobs, allOrders };
});

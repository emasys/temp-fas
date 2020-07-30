import { createSelector } from 'reselect';
import { AppState } from '../../lib/initialState';
import moment from 'moment';
import { getInvoiceTotal } from '../../util';

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
};

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
        completed: `Completed ${formatDate(
          item.vendorStatusDates?.completedDate
        )}`,
        rejected: 'Rejected',
        accepted: 'Accepted',
      };
      const total = item?.invoice
        ? Object.values(item?.invoice).reduce(
            (prev, curr) => Number(prev) + Number(curr),
            0
          )
        : 0;
      return {
        ...item,
        stage: item.vendorStatusDates?.paymentDate
          ? 'Payment completed'
          : 'Payment pending',
        cost: Number(total),
        status: jobStatusMapper[item.vendorStatus],
        color: jobColorMapper[item.vendorStatus],
      };
    });
    let allOrders = orders.map((item) => {
      const jobStatusMapper = {
        not_started: 'Not started',
        started: `Started ${formatDate(item.vendorStatusDates?.startedDate)}`,
        completed: `Completed ${formatDate(
          item.vendorStatusDates?.completedDate
        )}`,
        rejected: 'Rejected',
        accepted: 'Accepted',
      };
      const total = item?.invoice
        ? Object.values(item?.invoice).reduce(
            (prev, curr) => Number(prev) + Number(curr),
            0
          )
        : 0;
      return {
        ...item,
        stage: item.vendorStatusDates?.paymentDate
          ? 'Payment completed'
          : 'Payment pending',
        cost: Number(total) - Number(total) * 0.02,
        status: jobStatusMapper[item.vendorStatus],
        color: jobColorMapper[item.vendorStatus],
      };
    });
    let totalCost = 0;
    let earnedAmount = 0;
    allOrders.forEach((job) => {
      if (job.invoice) {
        totalCost += getInvoiceTotal(job.invoice);
        if (job.vendorStatus === 'completed') {
          earnedAmount += getInvoiceTotal(job.invoice);
        }
      }
    });

    const jobStat = {
      total: allOrders.length,
      totalRequest: allJobs.length,
      completedRequest: allJobs.filter(
        (job) => job.vendorStatus === 'completed'
      ).length,
      completed: allOrders.filter((job) => job.vendorStatus === 'completed')
        .length,
      rejected: allOrders.filter((job) => job.vendorStatus === 'rejected')
        .length,
      earnedAmount,
      totalCost,
    };
    return { isBooked, allJobs, allOrders, jobStat };
  }
);

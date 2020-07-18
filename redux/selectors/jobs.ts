import { createSelector } from 'reselect';
import { AppState } from '../../lib/initialState';

const jobs = (state: AppState) => state.jobs;
const vendor = (state: AppState) => state.vendor.activeVendor;

const jobColorMapper = {
  not_started: '#574497',
  started: '#574497',
  completed: 'rgba(0, 155, 106)',
  rejected: '#FF8515',
  accepted: 'rgba(0, 155, 106)',
};

export const getUserJobs = createSelector([jobs, vendor], (job, vendor) => {
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
  return { isBooked, allJobs };
});

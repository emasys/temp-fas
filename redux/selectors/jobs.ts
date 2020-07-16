import { createSelector } from 'reselect';
import { AppState } from '../../lib/initialState';

const jobs = (state: AppState, vendorId?: string) => {
  return {
    data: state.jobs,
    vendorId,
  };
};

const jobColorMapper = {
  not_started: '#574497',
  started: '#574497',
  completed: 'rgba(0, 155, 106)',
  rejected: '#FF8515',
  accepted: 'rgba(0, 155, 106)',
};

export const getUserJobs = createSelector(jobs, (job) => {
  const isBooked = job.data.find(({ vendorId }) => job.vendorId === vendorId);
  const allJobs = job.data.map((item) => {
    const jobStatusMapper = {
      not_started: 'Not started',
      started: 'Started on 2020-07-26',
      completed: `Completed on 2020-07-26`,
      rejected: 'Rejected on 2020-07-26',
      accepted: 'Accepted on 2020-07-26',
    };
    return {
      ...item,
      status: jobStatusMapper[item.vendorStatus],
      color: jobColorMapper[item.vendorStatus]
    };
  });
  return { isBooked, allJobs };
});

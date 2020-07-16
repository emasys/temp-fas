import { createSelector } from 'reselect';
import { AppState } from '../../lib/initialState';

const jobs = (state: AppState, vendorId?: string) => {
  return {
    data: state.jobs,
    vendorId,
  };
};

const jobColorMapper = {
  request: '#FFD36D',
  active: '#574497',
  done: '#574497',
  closed: '#FF8515',
  accepted: 'rgba(0, 155, 106, 0.15)',
  review: '#574497',
};

export const getUserJobs = createSelector(jobs, (job) => {
  const isBooked = job.data.find(({ vendorId }) => job.vendorId === vendorId);
  const allJobs = job.data.map((item) => {
    const jobStatusMapper = {
      request: 'Awaiting invoice',
      active: 'Active',
      done: `Done on 2020-07-26`,
      closed: 'Closed',
      accepted: 'Completed on dummy date',
      review: 'Review',
    };
    return {
      ...item,
      status: jobStatusMapper[item.stage],
      color: jobColorMapper[item.stage]
    };
  });
  return { isBooked, allJobs };
});

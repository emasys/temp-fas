import { createSelector } from 'reselect';
import { AppState } from '../../lib/initialState';

const jobs = (state: AppState, vendorId: string) => {
  return {
    data: state.jobs,
    vendorId,
  };
};

export const getUserJobs = createSelector(jobs, (job) => {
  const isBooked = job.data.find(({ vendorId }) => job.vendorId === vendorId);
  const allJobs = job.data;
  return { isBooked, allJobs };
});

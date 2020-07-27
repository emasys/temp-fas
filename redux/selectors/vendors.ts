import { createSelector } from 'reselect';
import { AppState } from '../../lib/initialState';

const user = (state: AppState) => state.user;

export const getVendorStatus = createSelector([user], (user) => {
  return user?.vendorProfile;
});

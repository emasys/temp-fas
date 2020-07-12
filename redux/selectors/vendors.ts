import { createSelector } from 'reselect';
import { AppState } from '../../lib/initialState';

const vendors = (state: AppState, userId: string) => {
  return {
    data: state.vendor.allVendors,
    userId,
  };
};

export const getVendorStatus = createSelector(vendors, (vendor) => {
  return vendor.data.find(({ userId }) => userId === vendor.userId);
});

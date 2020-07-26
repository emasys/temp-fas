import { createSelector } from 'reselect';
import { AppState } from '../../lib/initialState';

const vendors = (state: AppState) => state.vendor.allVendors;
const user = (state: AppState) => state.auth;

export const getVendorStatus = createSelector(
  [vendors, user],
  (vendor, user) => {
    console.log(vendor, user);
    return vendor.find(({ userId }) => userId === user.id);
  }
);

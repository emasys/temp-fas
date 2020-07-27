import { IAuth, initialAuthState } from '../redux/reducers/auth';
import { IServices, initialServicesState } from '../redux/reducers/services';
import { IVendor, ICommon, ILocation, IJob, IOrder } from '../interfaces';
import { initialVendorsState, IVendors } from '../redux/reducers/vendor';
import { initialCommonState } from '../redux/reducers/common';
import { initialSMState, ISocialMedia } from '../redux/reducers/socialMedia';
import { initialLocationState } from '../redux/reducers/locations';
import { initialJobsState } from '../redux/reducers/jobs';
import { initialOrderState } from '../redux/reducers/orders';
import { IUser, initialUserState } from '../redux/reducers/user';

export interface AppState {
  auth: IAuth;
  user: IUser;
  orders: IOrder[];
  services: IServices;
  vendor: IVendors;
  common: ICommon;
  jobs: IJob[];
  locations: ILocation[];
  socialMedia: ISocialMedia;
}

const state: AppState = {
  user: initialUserState,
  orders: initialOrderState,
  jobs: initialJobsState,
  auth: initialAuthState,
  locations: initialLocationState,
  services: initialServicesState,
  vendor: initialVendorsState,
  common: initialCommonState,
  socialMedia: initialSMState,
};

export default state;

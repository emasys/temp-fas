import { IAuth, initialAuthState } from '../redux/reducers/auth';
import { IServices, initialServicesState } from '../redux/reducers/services';
import { IVendor, ICommon } from '../interfaces';
import { initialVendorsState } from '../redux/reducers/vendor';
import { initialCommonState } from '../redux/reducers/common';

export interface AppState {
  auth: IAuth;
  services: IServices;
  vendor: IVendor[];
  common: ICommon;
}

const state: AppState = {
  auth: initialAuthState,
  services: initialServicesState,
  vendor: initialVendorsState,
  common: initialCommonState
};

export default state;

import { IAuth, initialAuthState } from '../redux/reducers/auth';
import { IServices, initialServicesState } from '../redux/reducers/services';
import { IVendor, ICommon } from '../interfaces';
import { initialVendorsState } from '../redux/reducers/vendor';
import { initialCommonState } from '../redux/reducers/common';
import { initialSMState, ISocialMedia } from '../redux/reducers/socialMedia';

export interface AppState {
  auth: IAuth;
  services: IServices;
  vendor: IVendor[];
  common: ICommon;
  socialMedia: ISocialMedia;
}

const state: AppState = {
  auth: initialAuthState,
  services: initialServicesState,
  vendor: initialVendorsState,
  common: initialCommonState,
  socialMedia: initialSMState,
};

export default state;

import { IAuth, initialAuthState } from '../redux/reducers/auth';
import { IServices, initialServicesState } from '../redux/reducers/services';
import { IVendor, ICommon, ILocation } from '../interfaces';
import { initialVendorsState } from '../redux/reducers/vendor';
import { initialCommonState } from '../redux/reducers/common';
import { initialSMState, ISocialMedia } from '../redux/reducers/socialMedia';
import { initialLocationState } from '../redux/reducers/locations';

export interface AppState {
  auth: IAuth;
  services: IServices;
  vendor: IVendor[];
  common: ICommon;
  locations: ILocation[];
  socialMedia: ISocialMedia;
}

const state: AppState = {
  auth: initialAuthState,
  locations: initialLocationState,
  services: initialServicesState,
  vendor: initialVendorsState,
  common: initialCommonState,
  socialMedia: initialSMState,
};

export default state;

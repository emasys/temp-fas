import { IAuth, initialAuthState } from '../redux/reducers/auth';
import { IServices, initialServicesState } from '../redux/reducers/services';
import { IVendor } from '../interfaces';
import { initialVendorsState } from '../redux/reducers/vendor';

export interface AppState {
  auth: IAuth;
  services: IServices;
  vendor: IVendor[];
}

const state: AppState = {
  auth: initialAuthState,
  services: initialServicesState,
  vendor: initialVendorsState,
};

export default state;

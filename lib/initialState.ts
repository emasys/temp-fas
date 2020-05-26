import { IAuth, initialAuthState } from '../redux/reducers/auth';
import { IServices, initialServicesState } from '../redux/reducers/services';

export interface AppState {
  auth: IAuth;
  services: IServices;
}

const state: AppState = {
  auth: initialAuthState,
  services: initialServicesState
};

export default state;

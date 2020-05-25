import { IAuth, initialAuthState } from '../redux/reducers/auth';

export interface AppState {
  auth: IAuth;
}

const state: AppState = {
  auth: initialAuthState,
};

export default state;

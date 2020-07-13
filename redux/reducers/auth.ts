import { EActionTypes } from '../actions/types';
import { instance } from '../../config/axiosConfig';

interface ILoginRes {
  auth: string;
  email: string;
  fullName: null | string;
  id: string;
}
interface ILoginAction {
  type: EActionTypes.LOGIN;
  payload: ILoginRes;
}

interface ILogOutAction {
  type: EActionTypes.LOG_OUT;
  payload: ILoginRes;
}

export interface IResetAction {
  type: EActionTypes.RESET_STORE;
  payload: null;
}

export interface IAuth {
  auth: string;
  fullName: string;
  email: string;
  id: string;
}

export type TAuthActions = ILoginAction | IResetAction | ILogOutAction;

export const initialAuthState = {
  auth: '',
  fullName: '',
  email: '',
  id: '',
};

export default function auth(
  state: IAuth = initialAuthState,
  action: TAuthActions
): IAuth {
  if (state.auth) instance.defaults.headers.common['Authorization'] = `Bearer ${state.auth}`;
  switch (action.type) {
    case EActionTypes.LOGIN:
      return action.payload;
    case EActionTypes.LOG_OUT:
      return initialAuthState;
    case EActionTypes.RESET_STORE:
      return initialAuthState;
    default:
      return state;
  }
}

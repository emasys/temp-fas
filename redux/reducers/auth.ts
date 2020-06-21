import { EActionTypes } from '../actions/types';

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

export type TAuthActions = ILoginAction | IResetAction;

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
  switch (action.type) {
    case EActionTypes.LOGIN:
      return action.payload;
    case EActionTypes.RESET_STORE:
      return initialAuthState;
    default:
      return state;
  }
}

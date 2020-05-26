import { EActionTypes } from '../actions/types';
import { ILogin } from '../actions/auth';

interface ILoginAction {
  type: EActionTypes.LOGIN;
  payload: ILogin;
}

export interface IResetAction {
  type: EActionTypes.RESET_STORE;
  payload: null;
}

export interface IAuth {
  loggedIn: ILogin;
}

export type TAuthActions = ILoginAction | IResetAction;

export const initialAuthState = {
  loggedIn: {
    email: '',
    password: '',
  },
};

export default function auth(
  state: IAuth = initialAuthState,
  action: TAuthActions
): IAuth {
  switch (action.type) {
    case EActionTypes.LOGIN:
      return {
        ...state,
        loggedIn: action.payload,
      };
    case EActionTypes.RESET_STORE:
      return initialAuthState;

    default:
      return state;
  }
}

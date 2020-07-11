import { EActionTypes } from '../actions/types';
import { IResetAction } from './auth';
import { ICommon } from '../../interfaces';

interface ISaveURI {
  type: EActionTypes.SAVE_URI;
  payload: string;
}

interface IAuthModal {
  type: EActionTypes.HANDLE_AUTH_MODAL;
  payload: boolean;
}

interface IToggleLogin {
  type: EActionTypes.IS_LOGIN;
  payload: string;
}

interface ISaveEmail {
  type: EActionTypes.SAVE_EMAIL;
  payload: string;
}

export type TCommonActions =
  | ISaveURI
  | IResetAction
  | IAuthModal
  | ISaveEmail
  | IToggleLogin;

export const initialCommonState = {
  tempUri: '',
  openAuthModal: false,
  isLogin: 'login',
  tempEmail: '',
};

export default function vendor(
  state: ICommon = initialCommonState,
  action: TCommonActions
): ICommon {
  switch (action.type) {
    case EActionTypes.SAVE_URI:
      return {
        ...state,
        tempUri: action.payload,
      };
    case EActionTypes.HANDLE_AUTH_MODAL:
      return {
        ...state,
        openAuthModal: action.payload,
      };
    case EActionTypes.IS_LOGIN:
      return {
        ...state,
        isLogin: action.payload,
      };
    case EActionTypes.SAVE_EMAIL:
      return {
        ...state,
        tempEmail: action.payload,
      };
    case EActionTypes.RESET_STORE:
      return initialCommonState;
    default:
      return state;
  }
}

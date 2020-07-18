import { EActionTypes } from '../actions/types';
import { IResetAction } from './auth';
import { ICommon, IJob } from '../../interfaces';

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

interface ITriggerBAV {
  type: EActionTypes.TRIGGER_BAV;
  payload: boolean;
}

interface IToggleDrawer {
  type: EActionTypes.TOGGLE_DRAWER;
  payload: boolean;
}

interface IDrawerContent {
  type: EActionTypes.SET_DRAWER_JOB;
  payload: IJob;
}

export type TCommonActions =
  | ISaveURI
  | IResetAction
  | IDrawerContent
  | IAuthModal
  | ITriggerBAV
  | ISaveEmail
  | IToggleDrawer
  | IToggleLogin;

export const initialCommonState = {
  tempUri: '',
  openAuthModal: false,
  isLogin: 'login',
  tempEmail: '',
  drawerContent: null,
  drawerStatus: false,
  isBAV: false,
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
    case EActionTypes.SET_DRAWER_JOB:
      return {
        ...state,
        drawerContent: action.payload,
      };
    case EActionTypes.TOGGLE_DRAWER:
      return {
        ...state,
        drawerStatus: action.payload,
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
    case EActionTypes.TRIGGER_BAV:
      return {
        ...state,
        isBAV: action.payload,
      };
    case EActionTypes.RESET_STORE:
      return initialCommonState;
    default:
      return state;
  }
}

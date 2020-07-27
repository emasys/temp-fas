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

interface IInvoiceValue {
  type: EActionTypes.UPDATE_INVOICE_VALUE;
  payload: {
    item: string;
    amount: string;
  };
}

interface IAddInvoiceValue {
  type: EActionTypes.ADD_INVOICE_VALUE;
  payload: any[];
}
interface IUpdateOrderInvoice {
  type: EActionTypes.UPDATE_JOB_INVOICE;
  payload: { id: string; data: any };
}

interface IMobileDrawer {
  type: EActionTypes.TOGGLE_MOBILE_DRAWER;
  payload: boolean;
}

interface IMakePayment {
  type: EActionTypes.UPDATE_PAYMENT_STATUS;
  payload: IJob;
}

export type TCommonActions =
  | ISaveURI
  | IMakePayment
  | IAddInvoiceValue
  | IResetAction
  | IDrawerContent
  | IAuthModal
  | IMobileDrawer
  | ITriggerBAV
  | ISaveEmail
  | IUpdateOrderInvoice
  | IInvoiceValue
  | IToggleDrawer
  | IToggleLogin;

export const initialCommonState = {
  tempUri: '',
  openAuthModal: false,
  isLogin: 'login',
  tempEmail: '',
  drawerContent: null,
  drawerStatus: false,
  mobileDrawer: false,
  isBAV: false,
  invoiceValues: [],
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
    case EActionTypes.UPDATE_INVOICE_VALUE:
      return {
        ...state,
        invoiceValues: Object.entries(action.payload).map((item, index) => {
          if (item[1] && typeof item[1] !== 'string') {
            return {
              item: item[0],
              value: item[1],
              id: index,
            };
          }
        }),
      };
    case EActionTypes.ADD_INVOICE_VALUE:
      return {
        ...state,
        invoiceValues: action.payload,
      };
    case EActionTypes.SET_DRAWER_JOB:
      return {
        ...state,
        drawerContent: action.payload,
      };
    case EActionTypes.TOGGLE_MOBILE_DRAWER:
      return {
        ...state,
        mobileDrawer: action.payload,
      };
    case EActionTypes.UPDATE_JOB_INVOICE:
      return {
        ...state,
        drawerContent: {
          ...state.drawerContent,
          invoice: action.payload.data,
        },
      };
    case EActionTypes.UPDATE_PAYMENT_STATUS:
      return {
        ...state,
        drawerContent: {
          ...state.drawerContent,
          vendorStatusDates: action.payload.vendorStatusDates,
        },
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

import { EActionTypes } from '../actions/types';
import { IVendor } from '../../interfaces';

export interface IBank {
  accountName: string;
  accountNumber: string;
  bankName: string;
  createdAt?: string;
  id?: string;
  updatedAt?: string;
  userId?: string;
}
export interface IUser {
  bankDetails?: IBank;
  vendorProfile?: IVendor;
  fullName: string;
  email: string;
  id: string;
}

interface IFetchUserAction {
  type: EActionTypes.FETCH_USER;
  payload: IUser;
}

interface IUpdateUserName {
  type: EActionTypes.UPDATE_USER_NAME;
  payload: { fullName: string };
}

interface IUpdateBankDetails {
  type: EActionTypes.UPDATE_BANK_DETAILS;
  payload: IBank;
}

export interface IResetAction {
  type: EActionTypes.RESET_STORE;
  payload: null;
}

export type TUserActions =
  | IFetchUserAction
  | IResetAction
  | IUpdateUserName
  | IUpdateBankDetails;

export const initialUserState = {
  fullName: '',
  email: '',
  id: '',
};

export default function user(
  state: IUser = initialUserState,
  action: TUserActions
): IUser {
  switch (action.type) {
    case EActionTypes.FETCH_USER:
      return action.payload;
    case EActionTypes.UPDATE_USER_NAME:
      return { ...state, ...action.payload };
    case EActionTypes.UPDATE_BANK_DETAILS:
      return {
        ...state,
        bankDetails: { ...state.bankDetails, ...action.payload },
      };
    case EActionTypes.RESET_STORE:
      return initialUserState;
    default:
      return state;
  }
}

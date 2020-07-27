import { EActionTypes } from '../actions/types';
import { IVendor } from '../../interfaces';

export interface IUser {
  bankDetails?: any;
  vendorProfile?: IVendor;
  fullName: string;
  email: string;
  id: string;
}

interface IFetchUserAction {
  type: EActionTypes.FETCH_USER;
  payload: IUser;
}

export interface IResetAction {
  type: EActionTypes.RESET_STORE;
  payload: null;
}

export type TUserActions = IFetchUserAction | IResetAction;

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
    case EActionTypes.RESET_STORE:
      return initialUserState;
    default:
      return state;
  }
}

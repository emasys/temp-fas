import { EActionTypes } from '../actions/types';
import { IResetAction } from './auth';
import { IVendor } from '../../interfaces';

interface ISaveVendor {
  type: EActionTypes.SAVE_VENDORS;
  payload: IVendor[];
}

interface IUpdateVendor {
  type: EActionTypes.UPDATE_VENDOR;
  payload: IVendor;
}

export type TVendorActions = ISaveVendor | IResetAction | IUpdateVendor;

export const initialVendorsState = [];

export default function vendor(
  state: IVendor[] = initialVendorsState,
  action: TVendorActions
): IVendor[] {
  switch (action.type) {
    case EActionTypes.SAVE_VENDORS:
      return action.payload;
    case EActionTypes.UPDATE_VENDOR:
      return [
        ...state.filter((vendor) => vendor.id !== action.payload.id),
        action.payload,
      ];
    case EActionTypes.RESET_STORE:
      return [];
    default:
      return state;
  }
}

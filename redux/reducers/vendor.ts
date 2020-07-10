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

interface ISearchVendor {
  type: EActionTypes.SEARCH_VENDOR;
  payload: IVendor[];
}

export type TVendorActions =
  | ISaveVendor
  | IResetAction
  | IUpdateVendor
  | ISearchVendor;

export interface IVendors {
  allVendors: IVendor[];
  searchResult: IVendor[];
}

export const initialVendorsState = {
  allVendors: [],
  searchResult: null,
};

export default function vendor(
  state: IVendors = initialVendorsState,
  action: TVendorActions
): IVendors {
  switch (action.type) {
    case EActionTypes.SAVE_VENDORS:
      return {
        ...state,
        allVendors: action.payload,
      };
    case EActionTypes.UPDATE_VENDOR:
      return {
        ...state,
        allVendors: [
          ...state.allVendors.filter(
            (vendor) => vendor.id !== action.payload.id
          ),
          action.payload,
        ],
      };
    case EActionTypes.SEARCH_VENDOR:
      return {
        ...state,
        searchResult: action.payload,
      };
    case EActionTypes.RESET_STORE:
      return initialVendorsState;
    default:
      return state;
  }
}

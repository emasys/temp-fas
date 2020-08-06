import { EActionTypes } from '../actions/types';
import { IResetAction } from './auth';
import { IVendor, IReview } from '../../interfaces';

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

interface IFetchReviews {
  type: EActionTypes.FETCH_VENDOR_REVIEWS;
  payload: IReview[];
}

export type TVendorActions =
  | ISaveVendor
  | IFetchReviews
  | IResetAction
  | IUpdateVendor
  | ISearchVendor;

export interface IVendors {
  allVendors: IVendor[];
  searchResult: IVendor[];
  activeVendor: IVendor;
  reviews: IReview[];
}

export const initialVendorsState = {
  allVendors: [],
  searchResult: null,
  reviews: [],
  activeVendor: {
    id: '',
    name: '',
    serviceId: '',
    userId: '',
    instagramToken: null,
    locationId: '',
    updatedAt: '',
    createdAt: '',
    rate: 0,
    phoneNumber: '',
  },
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
        activeVendor: action.payload,
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
    case EActionTypes.FETCH_VENDOR_REVIEWS:
      return {
        ...state,
        reviews: action.payload,
      };
    case EActionTypes.RESET_STORE:
      return initialVendorsState;
    default:
      return state;
  }
}

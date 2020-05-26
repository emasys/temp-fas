import { EActionTypes } from '../actions/types';
import { IResetAction } from './auth';

interface IServiceAction {
  type: EActionTypes.ALL_SERVICES;
  payload: any[];
}

export interface IServices {
  allServices: any[],
  popularServices: any[]
}

export type TServicesActions = IServiceAction | IResetAction;

export const initialServicesState = {
  allServices: [],
  popularServices: []
};

export default function services(
  state: IServices = initialServicesState,
  action: TServicesActions
): IServices {
  switch (action.type) {
    case EActionTypes.ALL_SERVICES:
      return {
        ...state,
        allServices: action.payload,
        popularServices: action.payload.filter((_, index) => index <= 5)
      };
    case EActionTypes.RESET_STORE:
      return initialServicesState;
    default:
      return state;
  }
}

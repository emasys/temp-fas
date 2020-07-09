import { EActionTypes } from '../actions/types';
import { IResetAction } from './auth';
import { IService } from '../../interfaces';

interface IServiceAction {
  type: EActionTypes.ALL_SERVICES;
  payload: any[];
}

export interface IServices {
  allServices: IService[];
  popularServices: IService[];
  searchOption: any[];
}

export type TServicesActions = IServiceAction | IResetAction;

export const initialServicesState = {
  allServices: [],
  popularServices: [],
  searchOption: [],
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
        popularServices: action.payload.filter((_, index) => index <= 5),
        searchOption: action.payload.map(({ name, id }) => ({
          title: name,
          id,
        })),
      };
    case EActionTypes.RESET_STORE:
      return initialServicesState;
    default:
      return state;
  }
}

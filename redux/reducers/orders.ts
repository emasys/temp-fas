import { EActionTypes } from '../actions/types';
import { IResetAction } from './auth';
import { IOrder } from '../../interfaces';

interface IFetchJobs {
  type: EActionTypes.FETCH_ORDERS;
  payload: IOrder[];
}

export type TActions = IFetchJobs | IResetAction;

export const initialOrderState = [];

export default function jobs(
  state: IOrder[] = initialOrderState,
  action: TActions
): IOrder[] {
  switch (action.type) {
    case EActionTypes.FETCH_ORDERS:
      return action.payload;
    case EActionTypes.RESET_STORE:
      return [];
    default:
      return state;
  }
}

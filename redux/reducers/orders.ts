import { EActionTypes } from '../actions/types';
import { IResetAction } from './auth';
import { IOrder } from '../../interfaces';

interface IFetchJobs {
  type: EActionTypes.FETCH_ORDERS;
  payload: IOrder[];
}

interface IUpdateOrderInvoice {
  type: EActionTypes.UPDATE_JOB_INVOICE;
  payload: { id: string; data: any };
}

export type TActions = IFetchJobs | IResetAction | IUpdateOrderInvoice;

export const initialOrderState = [];

export default function jobs(
  state: IOrder[] = initialOrderState,
  action: TActions
): IOrder[] {
  switch (action.type) {
    case EActionTypes.FETCH_ORDERS:
      return action.payload;
    case EActionTypes.UPDATE_JOB_INVOICE:
      const job = state.map((job) => {
        if (job.id === action.payload.id) {
          return {
            ...job,
            invoice: action.payload.data,
          };
        }
        return job;
      });
      return job;
    case EActionTypes.RESET_STORE:
      return [];
    default:
      return state;
  }
}

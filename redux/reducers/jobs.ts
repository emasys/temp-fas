import { EActionTypes } from '../actions/types';
import { IResetAction } from './auth';
import { IJob } from '../../interfaces';

interface IFetchJobs {
  type: EActionTypes.FETCH_JOBS;
  payload: IJob[];
}

interface IUpdateJob {
  type: EActionTypes.UPDATE_JOB;
  payload: IJob;
}

export type TActions =
  | IFetchJobs
  | IResetAction
  | IUpdateJob

export const initialJobsState = [];

export default function jobs(
  state: IJob[] = initialJobsState,
  action: TActions
): IJob[] {
  switch (action.type) {
    case EActionTypes.FETCH_JOBS:
      return action.payload;
    case EActionTypes.UPDATE_JOB:
      return [...state, action.payload];
    case EActionTypes.RESET_STORE:
      return [];
    default:
      return state;
  }
}

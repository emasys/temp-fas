import { EActionTypes } from '../actions/types';
import { IResetAction } from './auth';
import { ILocation } from '../../interfaces';

interface ISaveLocations {
  type: EActionTypes.SAVE_LOCATIONS;
  payload: ILocation[];
}

export type TActions = ISaveLocations | IResetAction;

export const initialLocationState = [];

export default function locations(
  state: ILocation[] = initialLocationState,
  action: TActions
): ILocation[] {
  switch (action.type) {
    case EActionTypes.SAVE_LOCATIONS:
      return action.payload;
    case EActionTypes.RESET_STORE:
      return [];
    default:
      return state;
  }
}

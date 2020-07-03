import { EActionTypes } from './types';
import { Dispatch } from 'redux';
import { setValue } from './common';
import { ILocation } from '../../interfaces';

export const saveLocations = (locations: ILocation[]) => (dispatch: Dispatch<any>) => {
  return dispatch(setValue(EActionTypes.SAVE_LOCATIONS, locations));
};

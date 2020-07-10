import { EActionTypes } from './types';
import { Dispatch } from 'redux';
import { setValue } from './common';
import { ILocation } from '../../interfaces';
import { fetchLocations } from '../../api';

export const saveLocations = (locations: ILocation[]) => (
  dispatch: Dispatch<any>
) => {
  return dispatch(setValue(EActionTypes.SAVE_LOCATIONS, locations));
};

export const fetchAllLocations = () => async (dispatch: Dispatch<any>) => {
  const locations = await fetchLocations();
  dispatch(saveLocations(locations));
};

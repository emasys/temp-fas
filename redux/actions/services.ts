import { EActionTypes } from './types';
import { Dispatch } from 'redux';
import { setValue } from './common';

export const saveServices = (services: any) => (dispatch: Dispatch<any>) => {
  return dispatch(setValue(EActionTypes.ALL_SERVICES, services));
};

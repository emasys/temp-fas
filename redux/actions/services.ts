import { EActionTypes } from './types';
import { Dispatch } from 'redux';
import { setValue, handleAuthError } from './common';
import { instance } from '../../config/axiosConfig';

export const saveServices = (services: any) => (dispatch: Dispatch<any>) => {
  return dispatch(setValue(EActionTypes.ALL_SERVICES, services));
};

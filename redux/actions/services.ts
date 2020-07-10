import { EActionTypes } from './types';
import { Dispatch } from 'redux';
import { setValue, handleAuthError } from './common';
import { instance } from '../../config/axiosConfig';
import { fetchServices } from '../../api';

export const saveServices = (services: any) => (dispatch: Dispatch<any>) => {
  return dispatch(setValue(EActionTypes.ALL_SERVICES, services));
};

export const getServices = () => async (
  dispatch: Dispatch<any>
) => {
  const services = await fetchServices();
  dispatch(saveServices(services));
};

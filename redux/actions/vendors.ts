import { EActionTypes } from './types';
import { Dispatch } from 'redux';
import { setValue, handleAuthError, handleAuthModal } from './common';
import { instance } from '../../config/axiosConfig';
import config from '../../config';
import { AppState } from '../../lib/initialState';

export const fetchVendor = (id: string | string[]) => async (
  dispatch: Dispatch<any>
) => {
  const url = `vendors/${id}`;
  try {
    const { data } = await instance.get(url);
    dispatch(setValue(EActionTypes.UPDATE_VENDOR, data));
  } catch (error) {
    dispatch(handleAuthError(error));
  }
};

interface IUpdateVendor {
  name?: 'string';
  rate?: 0;
  phoneNumber?: 'string';
  instagramToken?: 'string';
  headerImageUrl?: 'string';
  logoUrl?: 'string';
  locationId?: 'string';
}
export const updateVendor = (body: IUpdateVendor, id: string) => async (
  dispatch: Dispatch<any>,
  getState: () => AppState
) => {
  const url = `vendors/${id}`;
  try {
    const { data } = await instance.put(url, body);
    console.log(data, '=====');
    dispatch(setValue(EActionTypes.UPDATE_VENDOR, data));
  } catch (error) {
    dispatch(handleAuthModal(true));
    dispatch(handleAuthError(error));
  }
};

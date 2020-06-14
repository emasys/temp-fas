import { EActionTypes } from './types';
import { Dispatch } from 'redux';
import { setValue } from './common';
import { instance } from '../../config/axiosConfig';
import config from '../../config';

export const fetchVendor = (id: string | string[]) => async (
  dispatch: Dispatch<any>
) => {
  const url = `vendors/${id}`;
  try {
    const { data } = await instance.get(url);
    dispatch(setValue(EActionTypes.UPDATE_VENDOR, data));
  } catch (error) {
    console.log(error, '=====');
  }
};

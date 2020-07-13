import { EActionTypes } from './types';
import { Dispatch } from 'redux';
import { setValue, handleAuthError, handleAuthModal } from './common';
import { instance } from '../../config/axiosConfig';
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
    const { data } = await instance.put(url, body, {
      headers: {
        Authorization: `Bearer ${getState().auth.auth}`,
      },
    });
    dispatch(setValue(EActionTypes.UPDATE_VENDOR, data));
  } catch (error) {
    dispatch(handleAuthModal(true));
    dispatch(handleAuthError(error));
  }
};

export const searchVendors = (
  vendorId: any,
  stateId?: any,
  areaId?: any
) => async (dispatch: Dispatch<any>) => {
  let query = '';
  const isStateId = stateId?.length > 10
  if (isStateId) query = `?stateId=${stateId}`;
  if (areaId?.length> 10 && isStateId) query = `?areaId=${areaId}`;
  const url = `services/${vendorId}/vendors${query}`;
  try {
    const { data } = await instance.get(url);
    dispatch(setValue(EActionTypes.SEARCH_VENDOR, data));
  } catch (error) {
    dispatch(handleAuthError(error));
  }
};

export const fetchVendorJobs = (id: string | string[]) => async (
  dispatch: Dispatch<any>
) => {
  const url = `vendors/${id}/jobs`;
  try {
    const { data } = await instance.get(url);
    console.log(data, '=====');
    // dispatch(setValue(EActionTypes.UPDATE_VENDOR, data));
  } catch (error) {
    console.log(error, '====');
    // dispatch(handleAuthError(error));
  }
};

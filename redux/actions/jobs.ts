import { EActionTypes } from './types';
import { Dispatch } from 'redux';
import { setValue, handleAuthError, handleAuthModal } from './common';
import { instance } from '../../config/axiosConfig';
import { IJob } from '../../interfaces';
import { AppState } from '../../lib/initialState';

export const fetchVendorJobs = (id: string | string[]) => async (
  dispatch: Dispatch<any>,
) => {
  const url = `vendors/${id}/jobs`;
  try {
    const { data } = await instance.get(url);
    dispatch(setValue(EActionTypes.FETCH_ORDERS, data));
  } catch (error) {
    console.log(error, '====');
    // dispatch(handleAuthError(error));
  }
};

export const fetchUserJobs = () => async (dispatch: Dispatch<any>) => {
  const url = `jobs`;
  try {
    const { data } = await instance.get(url);
    dispatch(setValue(EActionTypes.FETCH_JOBS, data));
  } catch (error) {
    console.log(error, '====');
    // dispatch(handleAuthError(error));
  }
};

export const updateUserJob = (data: IJob) => async (
  dispatch: Dispatch<any>
) => {
  dispatch(setValue(EActionTypes.UPDATE_JOB, data));
};

export const setDrawerJob = (id: string) => async (
  dispatch: Dispatch<any>,
  getState: () => AppState
) => {
  let data = getState().jobs.find((job) => job.id === id);
  if(!data) data = getState().orders.find((job) => job.id === id);
  dispatch(setValue(EActionTypes.SET_DRAWER_JOB, data));
};

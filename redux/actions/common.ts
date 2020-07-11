import { EActionTypes } from './types';
import { Dispatch } from 'redux';
import { AxiosError } from 'axios';

export const setValue = (type: EActionTypes, payload: any) => {
  return {
    type,
    payload,
  };
};

export const saveURI = (url: string) => (dispatch: Dispatch<any>) => {
  return dispatch(setValue(EActionTypes.SAVE_URI, url));
};

export const handleAuthModal = (status: boolean) => (
  dispatch: Dispatch<any>
) => {
  return dispatch(setValue(EActionTypes.HANDLE_AUTH_MODAL, status));
};

export const handleAuthError = (error: AxiosError | any) => (
  dispatch: Dispatch
) => {
  if (error.response?.status === 401) {
    window.location.href = '/';
    dispatch(setValue(EActionTypes.RESET_STORE, null));
  }
};

export const toggleLogin = (page: string) => (dispatch: Dispatch) => {
  dispatch(setValue(EActionTypes.IS_LOGIN, page));
};

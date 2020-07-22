import { EActionTypes } from './types';
import { Dispatch } from 'redux';
import {
  setValue,
  handleAuthError,
  handleAuthModal,
  toggleModal,
} from './common';
import { instance } from '../../config/axiosConfig';
import { AppState } from '../../lib/initialState';

export interface ILogin {
  email: string;
  password: string;
}

export interface ILoginRes {
  fullName: string;
  email: string;
  auth_token: string;
  id: string;
}

export const login = (data: ILoginRes) => async (
  dispatch: Dispatch<any>,
  getState: () => AppState
) => {
  try {
    const {
      common: { isBAV },
    } = getState();
    const { fullName, email, auth_token, id } = data;
    const payload = {
      auth: auth_token,
      fullName,
      email,
      id,
    };
    instance.defaults.headers.common['Authorization'] = `Bearer ${auth_token}`;
    dispatch(setValue(EActionTypes.LOGIN, payload));
    // if (isBAV) {
    //   return dispatch(toggleModal('bav'));
    // }
    dispatch(handleAuthModal(false));
  } catch (error) {
    console.log(error, 'error');
  }
};

export const logOut = () => (dispatch: Dispatch<any>) => {
  dispatch(setValue(EActionTypes.LOG_OUT, null));
  instance.defaults.headers.common['Authorization'] = null;
};

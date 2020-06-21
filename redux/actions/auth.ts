import { EActionTypes } from './types';
import { Dispatch } from 'redux';
import { setValue, handleAuthError, handleAuthModal } from './common';
import { instance } from '../../config/axiosConfig';

export interface ILogin {
  email: string;
  password: string;
}

export const login = (data: ILogin) => async (dispatch: Dispatch<any>) => {
  const url = `auth/signin`;
  try {
    const res = await instance.post(url, data);
    const { fullName, email, auth_token, id } = res.data;
    const payload = {
      auth: auth_token,
      fullName,
      email,
      id,
    };
    instance.defaults.headers.common['Authorization'] = auth_token;
    dispatch(setValue(EActionTypes.LOGIN, payload));
    dispatch(handleAuthModal(false));
  } catch (error) {
    console.log(error)
    // dispatch(handleAuthError(error));
  }
};

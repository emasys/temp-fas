import { EActionTypes } from './types';
import { Dispatch } from 'redux';
import { setValue } from './common';

export interface ILogin {
  email: string;
  password: string;
}
export const login = (data: ILogin) => (dispatch: Dispatch<any>) => {
  return dispatch(setValue(EActionTypes.LOGIN, data));
};

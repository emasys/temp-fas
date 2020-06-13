import { EActionTypes } from './types';
import { Dispatch } from 'redux';

export const setValue = (type: EActionTypes, payload: any) => {
  return {
    type,
    payload,
  };
};

export const saveURI = (url: string) => (dispatch: Dispatch<any>) => {
  return dispatch(setValue(EActionTypes.SAVE_URI, url));
};

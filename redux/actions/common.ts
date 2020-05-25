import { EActionTypes } from './types';

export const setValue = (type: EActionTypes, payload: any) => {
  return {
    type,
    payload,
  };
};

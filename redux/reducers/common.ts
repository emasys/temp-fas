import { EActionTypes } from '../actions/types';
import { IResetAction } from './auth';
import { ICommon } from '../../interfaces';

interface ISaveURI {
  type: EActionTypes.SAVE_URI;
  payload: string;
}

export type TCommonActions = ISaveURI | IResetAction;

export const initialCommonState = {
  tempUri: '',
};

export default function vendor(
  state: ICommon = initialCommonState,
  action: TCommonActions
): ICommon {
  switch (action.type) {
    case EActionTypes.SAVE_URI:
      return {
        ...state,
        tempUri: action.payload,
      };
    case EActionTypes.RESET_STORE:
      return initialCommonState;
    default:
      return state;
  }
}

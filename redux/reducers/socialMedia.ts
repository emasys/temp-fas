import { EActionTypes } from '../actions/types';
import { IResetAction } from './auth';

export interface InstaData {
  id: string;
  media_url: string;
}

export interface ISocialMedia {
  data: InstaData[];
  prev: string;
  next: string;
}

interface ISaveInstaData {
  type: EActionTypes.SAVE_INSTADATA;
  payload: ISocialMedia;
}

interface IUpdateInstaData {
  type: EActionTypes.UPDATE_INSTADATA;
  payload: ISocialMedia;
}

export type TSMActions = ISaveInstaData | IResetAction | IUpdateInstaData;

export const initialSMState = {
  data: [],
  prev: '',
  next: '',
};

export default function socialMedia(
  state: ISocialMedia = initialSMState,
  action: TSMActions
): ISocialMedia {
  switch (action.type) {
    case EActionTypes.SAVE_INSTADATA:
      return {
        ...state,
        data: action.payload.data,
        next: action.payload.next,
        prev: action.payload.prev,
      };
    case EActionTypes.UPDATE_INSTADATA:
      return {
        ...state,
        ...action.payload,
      };
    case EActionTypes.RESET_STORE:
      return initialSMState;
    default:
      return state;
  }
}

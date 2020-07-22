import { EActionTypes } from './types';
import { Dispatch } from 'redux';
import { AxiosError } from 'axios';
import jwt from 'jwt-decode';
import moment from 'moment';
import { AppState } from '../../lib/initialState';

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
  dispatch(setValue(EActionTypes.HANDLE_AUTH_MODAL, status));
  !status && dispatch(toggleModal('login'));
};

export const handleAuthError = (error: AxiosError | any) => (
  dispatch: Dispatch
) => {
  if (error.response?.status === 401) {
    window.location.href = '/';
    dispatch(setValue(EActionTypes.RESET_STORE, null));
  }
};

export const validateToken = () => (
  dispatch: Dispatch,
  getState: () => AppState
) => {
  const {
    auth: { auth },
  } = getState();
  // const { exp } = jwt(auth);
  // const isExp = moment(exp*1000).isSameOrBefore(Date.now(), 'minute');
  // console.log(isExp,'=====', moment(exp * 1000).format(), auth)
  // if (isExp) {
  // }
};

export const toggleModal = (page: string) => (dispatch: Dispatch) => {
  dispatch(setValue(EActionTypes.IS_LOGIN, page));
};

export const toggleDrawer = (status: boolean) => (dispatch: Dispatch) => {
  dispatch(setValue(EActionTypes.TOGGLE_DRAWER, status));
};

export const toggleMobileDrawer = (status: boolean) => (dispatch: Dispatch) => {
  dispatch(setValue(EActionTypes.TOGGLE_MOBILE_DRAWER, status));
};

export const triggerBAV = (status: boolean) => (dispatch: Dispatch) => {
  dispatch(setValue(EActionTypes.TRIGGER_BAV, status));
};

export const addInvoiceValue = (values: any[]) => (dispatch: Dispatch) => {
  dispatch(setValue(EActionTypes.ADD_INVOICE_VALUE, values));
};

export const updateInvoiceValue = (values: {
  item: string;
  amount: string;
}) => (dispatch: Dispatch) => {
  dispatch(setValue(EActionTypes.UPDATE_INVOICE_VALUE, values));
};

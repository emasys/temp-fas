import { EActionTypes } from './types';
import { Dispatch } from 'redux';
import { setValue } from './common';
import { instance } from '../../config/axiosConfig';
import config from '../../config';

export const fetchInstagramMedia = (code: string | any) => async (
  dispatch: Dispatch<any>
) => {
  const url = `https://graph.instagram.com/me/media?fields=id,media_url&access_token=${code}`;
  try {
    const data = await instance.post(url);
    console.log(data, '=======');
    dispatch(setValue(EActionTypes.SAVE_INSTADATA, data));
  } catch (error) {
    console.log('====>', error);
  }
};

export const instagramAuth = (code: string | any) => async (
  dispatch: Dispatch<any>
) => {
  const url = `https://api.instagram.com/oauth/access_token`;
  const { client_id, client_secret, redirectUri } = config.instagram;
  const body = {
    client_id,
    client_secret,
    code,
    grant_type: 'authorization_code',
    redirect_uri: redirectUri,
  };
  try {
    const { data } = await instance.post(url, body, {
      headers: {
        'Content-type': 'multipart/form-data',
      },
    });
    console.log(data, '=======');
    localStorage.setItem('sm:auth', data?.access_token);
    // dispatch(setValue(EActionTypes.SAVE_INSTADATA, data));
  } catch (error) {
    console.log('====>', error);
  }
};

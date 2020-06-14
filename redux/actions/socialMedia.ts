import { EActionTypes } from './types';
import { Dispatch } from 'redux';
import { setValue } from './common';
import { instance } from '../../config/axiosConfig';
import config from '../../config';

export const fetchInstagramMedia = (direction?: string) => async (
  dispatch: Dispatch<any>
) => {
  const pagination = direction ? `&${direction}` : '';
  const url = `https://graph.instagram.com/me/media?fields=id,media_url,thumbnail_url${pagination}&limit=8&access_token=''`;
  try {
    const { data } = await instance.get(url);
    const payload = {
      data: data.data,
      next: data.paging.cursors.after,
      prev: data.paging.cursors.before,
    };
    dispatch(setValue(EActionTypes.SAVE_INSTADATA, payload));
  } catch (error) {
    const mapDirection: any = {
      before: 'prev',
      after: 'next',
    };
    const key = mapDirection[direction?.split('=')[0]];
    const payload = {
      [key]: '',
    };
    dispatch(setValue(EActionTypes.UPDATE_INSTADATA, payload));
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

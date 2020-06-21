import { EActionTypes } from './types';
import { Dispatch } from 'redux';
import { setValue } from './common';
import { instance } from '../../config/axiosConfig';
import config from '../../config';
import Axios from 'axios';
import { updateVendor } from './vendors';

export const fetchInstagramMedia = (code, direction?: string) => async (
  dispatch: Dispatch<any>
) => {
  const pagination = direction ? `&${direction}` : '';
  const url = `https://graph.instagram.com/me/media?fields=id,media_url,thumbnail_url${pagination}&limit=8&access_token=${code}`;
  try {
    const { data } = await Axios.get(url);
    const payload = {
      data: data.data,
      next: data.paging.cursors.after,
      prev: data.paging.cursors.before,
    };
    dispatch(setValue(EActionTypes.SAVE_INSTADATA, payload));
  } catch (error) {
    if (!code) {
      const payload = {
        data: [],
        next: '',
        prev: '',
      };
      return dispatch(setValue(EActionTypes.SAVE_INSTADATA, payload));
    }
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

export const instagramAuth = (code: string | any, id: string) => async (
  dispatch: Dispatch<any>
) => {
  const url = `https://api.instagram.com/oauth/access_token`;
  const { client_id, client_secret, redirectUri } = config.instagram;
  const data = new FormData();
  data.append('client_id', client_id);
  data.append('client_secret', client_secret);
  data.append('code', code);
  data.append('grant_type', 'authorization_code');
  data.append('redirect_uri', redirectUri);
  try {
    const res = await Axios.post(url, data);
    console.log({ instagramToken: res.data.access_token }, 'body')
    dispatch(updateVendor({ instagramToken: res.data.access_token }, id));
  } catch (error) {
    console.log('====>', error.response);
  }
};

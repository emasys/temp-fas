import axios from 'axios';
import config from './index';

export const instance = axios.create({
  baseURL: config.backendURL,
});

instance.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded';
instance.defaults.headers.put['Content-Type'] =
  'application/x-www-form-urlencoded';
instance.defaults.timeout = 50000;
const data = JSON.parse(localStorage.getItem('persist:fas') || '');
instance.defaults.headers.common['Authorization'] = data?.auth?.auth
console.log(data.auth.auth, '====');

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
const isClient = typeof window !== 'undefined';
if (isClient) {
  let data = JSON.parse(localStorage.getItem('persist:fas')) || '';
  if (data) {
    data = JSON.parse(data.auth);
    instance.defaults.headers.common['Authorization'] = `Bearer ${data?.auth}`;
    console.log(data?.auth, '====>>');
  }
}

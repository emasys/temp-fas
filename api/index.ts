import { instance } from '../config/axiosConfig';
import { ILogin } from '../redux/actions/auth';

export const fetchServices = async () => {
  try {
    const url = 'services';
    const { data } = await instance.get(url);
    return data;
  } catch (error) {
    return [];
  }
};

export const fetchLocations = async () => {
  try {
    const url = 'locations';
    const { data } = await instance.get(url);
    return data;
  } catch (error) {
    return [];
  }
};

export const fetchVendors = async (serviceId: any) => {
  try {
    const url = `services/${serviceId}/vendors`;
    const { data } = await instance.get(url);
    return data;
  } catch (error) {
    return [];
  }
};

export const loginAPI = async (data: ILogin) => {
  try {
    const url = 'auth/signin';
    const res = await instance.post(url, data);
    return res.data;
  } catch (error) {
    return false;
  }
};

export const signUpAPI = async (data: { email: string }) => {
  try {
    const url = 'auth/signup';
    const res = await instance.post(url, data);
    return res.data;
  } catch (error) {
    return false;
  }
};

interface ISignUp {
  email: string;
  token: number;
  password: string;
}
export const signUpVerify = async (data: ISignUp) => {
  try {
    const url = 'auth/verify-signup';
    const res = await instance.post(url, data);
    return res.data;
  } catch (error) {
    return false;
  }
};

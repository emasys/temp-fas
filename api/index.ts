import { instance } from '../config/axiosConfig';
import { ILogin } from '../redux/actions/auth';
import { AxiosError } from 'axios';

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
  fullName: string;
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

interface ICreateVendor {
  name: string;
  rate: number;
  phoneNumber: string;
  locationId: string;
}
export const createVendor = async (serviceId: string, data: ICreateVendor) => {
  try {
    const url = `services/${serviceId}/vendors`;
    const res = await instance.post(url, data);
    return res.data;
  } catch (error) {
    return false;
  }
};

interface ICreateOrder {
  vendorId: string;
  description: string;
  dueDate: string;
  locationId: string;
  address: string;
}
export const createOrder = async (data: ICreateOrder) => {
  try {
    const url = `jobs`;
    const res = await instance.post(url, data);
    return res.data;
  } catch (error) {
    return false;
  }
};

interface ICreateInvoice {
  invoice: any;
}

export const createInvoice = async (
  vendorId: string,
  jobId: string,
  data: ICreateInvoice
) => {
  try {
    const url = `vendors/${vendorId}/jobs/${jobId}/invoice`;
    const res = await instance.post(url, data);
    return res.data;
  } catch (error) {
    return false;
  }
};

export const handleJobPayment = async (jobId: string) => {
  try {
    const url = `/jobs/${jobId}/payments`;
    const res = await instance.post(url);
    return res.data;
  } catch (error) {
    return false;
  }
};

interface IVendorStatus {
  status: 'started' | 'not_started' | 'completed' | 'rejected' | 'accepted';
}
export const updateVendorStatus = async (
  data: IVendorStatus,
  jobId: string,
  vendorId: string
) => {
  try {
    const url = `vendors/${vendorId}/jobs/${jobId}/status`;
    const res = await instance.put(url, data);
    return res.data;
  } catch (error) {
    return false;
  }
};

export const updateJobDate = async (data: { date: string }, jobId: string) => {
  try {
    const url = `/jobs/${jobId}/due-date`;
    const res = await instance.put(url, data);
    return res.data;
  } catch (error) {
    return false;
  }
};

export const postJobRating = async (
  data: {
    rating: number;
    comment?: string;
  },
  jobId: string
) => {
  try {
    const res = await instance.post(`jobs/${jobId}/review`, data);
    return res.data;
  } catch (error) {
    return false;
  }
};

export const updateUserApi = async (data: { fullName: string }) => {
  try {
    const res = await instance.put(`user`, data);
    return res.data;
  } catch (error) {
    return false;
  }
};

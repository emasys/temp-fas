import { instance } from '../config/axiosConfig';

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

export interface IService {
  id: string;
  name: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

export interface IVendor {
  id: string;
  name: string;
  serviceId: string;
  userId: string;
  instagramToken: null | string;
  updatedAt: string;
  createdAt: string;
  rate: number;
  phoneNumber: string;
}

export interface ICommon {
  tempUri: string;
}

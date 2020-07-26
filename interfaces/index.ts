import { IAuth } from '../redux/reducers/auth';

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
  service?: IService;
  userId: string;
  instagramToken: null | string;
  updatedAt: string;
  createdAt: string;
  rate: number;
  phoneNumber: string;
}

interface IDrawerContent extends IJob {
  customer?: IAuth
}
export interface ICommon {
  tempUri: string;
  openAuthModal: boolean;
  isLogin: string;
  tempEmail: string;
  invoiceValues: any[];
  isBAV: boolean;
  mobileDrawer: boolean;
  drawerContent: IDrawerContent;
  drawerStatus: boolean;
}

export interface IArea {
  id: string;
  name: string;
  stateId: string;
  createdAt: string;
  updatedAt: string;
}

export interface ILocation {
  id: string;
  name: string;
  stateId: null;
  createdAt: string;
  updatedAt: string;
  areas: IArea[];
}

export interface IJob {
  cost: any;
  id: string;
  invoice: any;
  description: string;
  dueDate: string;
  stage: string;
  canceled: any;
  accepted: any;
  vendorStatusDates: any;
  vendorStatus: any;
  customerId: string;
  customer?: any;
  vendorId: string;
  locationId: string;
  address: string;
  createdAt: string;
  updatedAt: string;
  vendor: IVendor;
  location: ILocation;
}

export interface IOrder extends IJob {
  customer: IAuth;
}

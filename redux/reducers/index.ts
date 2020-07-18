import { combineReducers } from 'redux'
import auth from './auth';
import services from './services';
import vendor from './vendor';
import common from './common';
import socialMedia from './socialMedia';
import locations from './locations';
import jobs from './jobs';
import orders from './orders';

const reducers = {
  common,
  orders,
  jobs,
  locations,
  auth,
  services,
  vendor,
  socialMedia
}

export default combineReducers(reducers)

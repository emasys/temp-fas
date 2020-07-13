import { combineReducers } from 'redux'
import auth from './auth';
import services from './services';
import vendor from './vendor';
import common from './common';
import socialMedia from './socialMedia';
import locations from './locations';
import jobs from './jobs';

const reducers = {
  common,
  jobs,
  locations,
  auth,
  services,
  vendor,
  socialMedia
}

export default combineReducers(reducers)

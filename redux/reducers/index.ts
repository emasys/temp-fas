import { combineReducers } from 'redux'
import auth from './auth';
import services from './services';
import vendor from './vendor';
import common from './common';
import socialMedia from './socialMedia';

const reducers = {
  common,
  auth,
  services,
  vendor,
  socialMedia
}

export default combineReducers(reducers)

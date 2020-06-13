import { combineReducers } from 'redux'
import auth from './auth';
import services from './services';
import vendor from './vendor';
import common from './common';

const reducers = {
  common,
  auth,
  services,
  vendor
}

export default combineReducers(reducers)

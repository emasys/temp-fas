import { combineReducers } from 'redux'
import auth from './auth';
import services from './services';
import vendor from './vendor';

const reducers = {
  auth,
  services,
  vendor
}

export default combineReducers(reducers)

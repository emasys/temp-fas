import { combineReducers } from 'redux'
import auth from './auth';
import services from './services';

const reducers = {
  auth,
  services
}

export default combineReducers(reducers)

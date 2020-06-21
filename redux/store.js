import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { persistStore } from 'redux-persist';
import rootReducer from './reducers';
import { instance } from '../config/axiosConfig';

export default (initialState) => {
  let store;
  const isClient = typeof window !== 'undefined';
  const middleWare = {
    development: composeWithDevTools(applyMiddleware(thunkMiddleware)),
    production: applyMiddleware(thunkMiddleware),
  };

  if (isClient) {
    const { persistReducer } = require('redux-persist');
    const storage = require('redux-persist/lib/storage').default;

    const persistConfig = {
      key: 'fas',
      storage,
    };

    store = createStore(
      persistReducer(persistConfig, rootReducer),
      initialState,
      middleWare[process.env.NODE_ENV]
    );

    store.persistor = persistStore(store);
  } else {
    store = createStore(
      rootReducer,
      initialState,
      middleWare[process.env.NODE_ENV]
    );
  }

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const createNextReducer = require('./reducers').default;
      store.replaceReducer(createNextReducer(initialState));
    });
  }

  return store;
};

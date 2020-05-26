import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { persistStore } from 'redux-persist';
import rootReducer from './reducers'

export default initialState => {
  let store;
  const isClient = typeof window !== 'undefined';
  if (isClient) {
    const { persistReducer } = require('redux-persist');
    const storage = require('redux-persist/lib/storage').default;
 
    const persistConfig = {
      key: 'fas',
      storage
    };
 
    store = createStore(
      persistReducer(persistConfig, rootReducer),
      initialState,
      composeWithDevTools(applyMiddleware(thunkMiddleware))
    );
 
    store.persistor = persistStore(store)
  } else {
    store = createStore(
      rootReducer,
      initialState,
      composeWithDevTools(applyMiddleware(thunkMiddleware))
    );
  }

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const createNextReducer = require('./reducers').default
      store.replaceReducer(createNextReducer(initialState))
    })
  }

  return store
}

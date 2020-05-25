import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import reducers from './reducers'

const persistConfig = {
  key: 'fas',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)

export default initialState => {
  const store = createStore(
    persistedReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )


  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const createNextReducer = require('./reducers').default

      store.replaceReducer(createNextReducer(initialState))
    })
  }
  store.persistor = persistStore(store)

  return store
}

import React from 'react';
import { Provider } from 'react-redux';
import App from 'next/app';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import withReduxStore from '../lib/with-redux-store';
import '../styles/index.css';
import theme from '../styles/primary';
import { instance } from '../config/axiosConfig';
import { getServices } from '../redux/actions/services'
import { fetchAllLocations} from '../redux/actions/locations'

class MyApp extends App {
  componentDidMount() {
    this.props.store.dispatch(getServices())
    this.props.store.dispatch(fetchAllLocations())
  }
  
  render() {
    const { Component, pageProps, store } = this.props;
    instance.defaults.headers.common[
      'Authorization'
    ] = store.getState().auth.auth;
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={store.persistor}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    );
  }
}

export default withReduxStore(MyApp);

import React from 'react';
import { Provider } from 'react-redux';
import App from 'next/app';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import withReduxStore from '../lib/with-redux-store';
import '../styles/index.css';
import theme from '../styles/primary';

class MyApp extends App {
  render() {
    const { Component, pageProps, store } = this.props;
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

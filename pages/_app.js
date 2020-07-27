import React from 'react';
import { Provider } from 'react-redux';
import App from 'next/app';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import withReduxStore from '../lib/with-redux-store';
import '../styles/index.css';
import theme from '../styles/primary';
import { getServices } from '../redux/actions/services';
import { fetchAllLocations } from '../redux/actions/locations';
import JobsDrawer from '../components/jobsDrawer';
import ErrorBoundary from '../components/ErrorBoundary';

class MyApp extends App {
  componentDidMount() {
    this.props.store.dispatch(getServices());
    this.props.store.dispatch(fetchAllLocations());
  }

  componentDidCatch(error, errorInfo) {
    console.log('CUSTOM ERROR HANDLING', error);
    // This is needed to render errors correctly in development / production
    super.componentDidCatch(error, errorInfo);
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={store.persistor}>
          <ErrorBoundary>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <JobsDrawer />
              <Component {...pageProps} />
            </ThemeProvider>
          </ErrorBoundary>
        </PersistGate>
      </Provider>
    );
  }
}

export default withReduxStore(MyApp);


type IEnv = 'development' | 'staging' | 'production' | 'test';
const env: IEnv  = process.env.NODE_ENV;

const config = {
  development: {
    backendURL: 'https://fas-web-api.herokuapp.com/'
  },
  staging: {
    backendURL: 'https://fas-web-api.herokuapp.com/'
  },
  test: {
    backendURL: 'https://fas-web-api.herokuapp.com/'
  },
  production: {
    backendURL: 'https://fas-web-api.herokuapp.com/'
  }
};

export default config[env];

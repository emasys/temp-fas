type IEnv = 'development' | 'staging' | 'production' | 'test';
const env: IEnv = process.env.NODE_ENV;

const config = {
  development: {
    backendURL: 'https://fas-web-api.herokuapp.com/',
    instagram: {
      redirectUri: 'https://dc69ad3bf600.ngrok.io/auth',
      client_id: '254441985981155',
      client_secret: '9833f500a38a09a105f266ff891ecca5',
    },
  },
  staging: {
    backendURL: 'https://fas-web-api.herokuapp.com/',
    instagram: {
      redirectUri: 'https://dc69ad3bf600.ngrok.io/auth',
      client_id: '254441985981155',
      client_secret: '9833f500a38a09a105f266ff891ecca5',
    },
  },
  test: {
    backendURL: 'https://fas-web-api.herokuapp.com/',
    instagram: {
      redirectUri: 'https://dc69ad3bf600.ngrok.io/auth',
      client_id: '254441985981155',
      client_secret: '9833f500a38a09a105f266ff891ecca5',
    },
  },
  production: {
    backendURL: 'https://fas-web-api.herokuapp.com/',
    instagram: {
      redirectUri: 'https://fas.now.sh/auth',
      client_id: '254441985981155',
      client_secret: '9833f500a38a09a105f266ff891ecca5',
    },
  },
};

export default config[env];

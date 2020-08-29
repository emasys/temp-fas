type IEnv = 'development' | 'staging' | 'production' | 'test';
const env: IEnv = process.env.NODE_ENV;

const config = {
  development: {
    backendURL: 'https://fas-web-api.herokuapp.com/',
    // backendURL: 'http://localhost:4000/',
    cloudinary: {
      cloudName: 'fasng',
    },
    instagram: {
      redirectUri: 'https://dc69ad3bf600.ngrok.io/auth',
      client_id: '254441985981155',
      client_secret: '9833f500a38a09a105f266ff891ecca5',
    },
    paystack_key: 'pk_test_816babf83855d729c4343b81ddc93988e4d9a889',
  },
  staging: {
    backendURL: 'https://fas-web-api.herokuapp.com/',
    instagram: {
      redirectUri: 'https://dc69ad3bf600.ngrok.io/auth',
      client_id: '254441985981155',
      client_secret: '9833f500a38a09a105f266ff891ecca5',
    },
    paystack_key: 'pk_test_816babf83855d729c4343b81ddc93988e4d9a889',
  },
  test: {
    backendURL: 'https://fas-web-api.herokuapp.com/',
    instagram: {
      redirectUri: 'https://dc69ad3bf600.ngrok.io/auth',
      client_id: '254441985981155',
      client_secret: '9833f500a38a09a105f266ff891ecca5',
    },
    paystack_key: 'pk_test_816babf83855d729c4343b81ddc93988e4d9a889',
  },
  production: {
    backendURL: 'https://fas-web-api.herokuapp.com/',
    paystack_key: 'pk_test_816babf83855d729c4343b81ddc93988e4d9a889',
    cloudinary: {
      cloudName: 'fasng',
    },
    instagram: {
      redirectUri: 'https://fas.now.sh/auth',
      client_id: '254441985981155',
      client_secret: '9833f500a38a09a105f266ff891ecca5',
    },
  },
};

export default config[env];

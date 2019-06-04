module.exports = {
  port: 3700,
  auth: {
    service: 'auth0',
    configuration: {
      domain: '3duniversum.eu.auth0.com',
      clientID: 'rWTJYHuONWw_c24EEx1XTLC1dktyzbwN',
      clientSecret: 'XxhzpUilzHs9jxi9Ierr4Nb2D2xVoQ8Xn76gPmemJKuUCYrMR0SsGPct7XMEqU0g',
      callbackURL: '/api/v1/auth/callback'
    }
  },
  api: {
    prefix: '/api',
    version: '/v1'
  },
  useModernCompression: false
};

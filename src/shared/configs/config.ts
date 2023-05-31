import { Config } from './config.interface';

//env: process.env.APP_ENV,

export default (): Config => ({
  nest: {
    port: +process.env.PORT,
    environment: process.env.APP_ENV,
  },
  cors: {
    enabled: true,
  },
  mongo: {
    production_url: `mongodb+srv://${
      process.env.DATABASE_USERNAME
    }:${encodeURIComponent(
      process.env.DATABASE_PASSWORD,
    )}@cluster0.op0nt.mongodb.net/?retryWrites=true&w=majority`,
    development_url: 'mongodb://localhost:3010',
  },
  security: {
    expiresIn: '7d', //2m
    refreshIn: '7d',
    bcryptSaltOrRound: 10,
  },

  nodemailer: {
    transport: `smtps://${process.env.GMAIL}:${process.env.APPLICATION_PASSWORD}@smtp.gmail.com`,
  },
  validationPipeOptions: {
    transform: true,
    whitelist: false,
  },
  paypal: {
    clientId: process.env.PAYPAL_CLIENT_ID,
    clientSecret: process.env.PAYPAL_CLIENT_SECRET,
  },
  accessTokenSeller: {
    secret: process.env.AT_SECRET_SELLER,
    expiresIn: '5m',
  },
  refreshTokenSeller: {
    secret: process.env.RT_SECRET_SELLER,
    expiresIn: '7d',
  },

  accessTokenCustomer: {
    secret: process.env.AT_SECRET_CUSTOMER,
    expiresIn: '5m',
  },
  refreshTokenCustomer: {
    secret: process.env.RT_SECRET_CUSTOMER,
    expiresIn: '7d',
  },
});

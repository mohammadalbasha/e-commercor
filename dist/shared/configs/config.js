"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => ({
    nest: {
        port: +process.env.PORT,
        environment: process.env.APP_ENV,
    },
    adminAuth: {
        username: process.env.ADMIN_USERNAME,
        password: process.env.ADMIN_PASSWORD,
    },
    cors: {
        enabled: true,
    },
    mongo: {
        production_url: `mongodb+srv://${process.env.DATABASE_USERNAME}:${encodeURIComponent(process.env.DATABASE_PASSWORD)}@cluster0.op0nt.mongodb.net/?retryWrites=true&w=majority`,
        development_url: 'mongodb://localhost:3010',
    },
    security: {
        expiresIn: '7d',
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
        expiresIn: '7d',
    },
    refreshTokenSeller: {
        secret: process.env.RT_SECRET_SELLER,
        expiresIn: '7d',
    },
    accessTokenCustomer: {
        secret: process.env.AT_SECRET_CUSTOMER,
        expiresIn: '7d',
    },
    refreshTokenCustomer: {
        secret: process.env.RT_SECRET_CUSTOMER,
        expiresIn: '7d',
    },
});
//# sourceMappingURL=config.js.map
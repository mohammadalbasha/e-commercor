export interface Config {
    nest: NestConfig;
    cors: CorsConfig;
    security: SecurityConfig;
    nodemailer: NodemailerConfig;
    mongo: MongoConfig;
    validationPipeOptions: ValidationPipeOptionsConfig;
    paypal: PaypalConfig;
    accessTokenSeller: AccessTokenConfig;
    refreshTokenSeller: RefreshTokenConfig;
    accessTokenCustomer: AccessTokenConfig;
    refreshTokenCustomer: RefreshTokenConfig;
}
export interface MongoConfig {
    production_url: string;
    development_url: string;
}
export interface NestConfig {
    port: number;
    environment: string;
}
export interface CorsConfig {
    enabled: boolean;
}
export interface PaypalConfig {
    clientId: string;
    clientSecret: string;
}
export interface ValidationPipeOptionsConfig {
    transform: boolean;
    whitelist: boolean;
}
export interface SecurityConfig {
    expiresIn: string;
    refreshIn: string;
    bcryptSaltOrRound: string | number;
}
export interface NodemailerConfig {
    transport: string;
}
export interface AccessTokenConfig {
    secret: string;
    expiresIn: string;
}
export interface RefreshTokenConfig {
    secret: string;
    expiresIn: string;
}

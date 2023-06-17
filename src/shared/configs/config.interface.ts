export interface Config {
  nest: NestConfig;
  cors: CorsConfig;
  adminAuth: AdminAuthConfig;
  //  swagger: SwaggerConfig;
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

export interface AdminAuthConfig {
  username: string;
  password: string;
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

// export interface SwaggerConfig {
//   enabled: boolean;
//   title: string;
//   description: string;
//   version: string;
//   path: string;
// }

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

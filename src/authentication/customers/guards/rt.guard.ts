import { AuthGuard } from '@nestjs/passport';

export class RtCustomerGuard extends AuthGuard('jwt-refresh-customer') {
  constructor() {
    super();
  }
}

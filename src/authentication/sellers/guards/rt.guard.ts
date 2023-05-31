import { AuthGuard } from '@nestjs/passport';

export class RtSellerGuard extends AuthGuard('jwt-refresh-seller') {
  constructor() {
    super();
  }
}

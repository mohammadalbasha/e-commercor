import { AuthGuard } from '@nestjs/passport';

export class RtAdminGuard extends AuthGuard('jwt-refresh-admin') {
  constructor() {
    super();
  }
}

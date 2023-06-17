import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class AtCustomerGuard extends AuthGuard('jwt-customer') {
  constructor(private reflector: Reflector) {
    super();
  }

  handleRequest(err, user, info, context: ExecutionContext) {
    if (user.storeId != context.switchToHttp().getRequest().params.storeId)
      throw new UnauthorizedException();
    return user;
  }

  canActivate(context: ExecutionContext) {
    const isPublic = this.reflector.getAllAndOverride('isPublic', [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isPublic) return true;

    return super.canActivate(context);
  }
}

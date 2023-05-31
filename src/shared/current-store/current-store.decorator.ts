import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const GetCurrentStore = createParamDecorator(
  (data: any, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    return data ? request.store[data] : request.store;
  },
);

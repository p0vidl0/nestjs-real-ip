import * as requestIp from '@supercharge/request-ip';
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const RealIP = createParamDecorator((data: unknown, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();
  return requestIp.getClientIp(request);
});

export const RealIp = RealIP;

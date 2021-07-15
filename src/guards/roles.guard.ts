import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { FastifyRequest } from 'fastify';

@Injectable()
export class RolesGuard implements CanActivate {

  /**
   * 
   * @param context 
   * @returns 
   */
  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {

    const host = context.switchToHttp();

    const req = host.getRequest<FastifyRequest>();

    const foo = req.headers['x-foo'];

    return foo === 'something';
  }
}

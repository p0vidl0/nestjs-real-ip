import { INestApplication, Type } from '@nestjs/common';
import { FastifyAdapter } from '@nestjs/platform-fastify';
import { AbstractHttpAdapter } from '@nestjs/core';
import { Test } from '@nestjs/testing';

export type Adapter = Type<AbstractHttpAdapter>;

async function fastifyExtraWait(adapter: Adapter, app: INestApplication) {
  if (adapter === FastifyAdapter) {
    const instance = app.getHttpAdapter().getInstance();
    if (instance && typeof instance.ready === 'function') {
      await instance.ready();
    }
  }
}

export async function createServer(controller: Type<any>, Adapter: Adapter): Promise<INestApplication> {
  const moduleRef = await Test.createTestingModule({
    controllers: [controller],
  }).compile();
  const app = moduleRef.createNestApplication(new Adapter());
  await app.init();
  await fastifyExtraWait(Adapter, app);
  return app;
}

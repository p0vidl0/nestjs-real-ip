import * as request from 'supertest';
import { Controller, Get } from '@nestjs/common';
import { RealIP } from '../src';
import { createServer } from './helpers/utils';
import { headers, platforms } from './helpers/data';

describe.each(platforms)('Main %s platform', (platformName, platformClass) => {
  let app;
  let server;

  beforeEach(async () => {
    @Controller('/')
    class TestController {
      @Get('my-ip')
      get(@RealIP() ip: string): string {
        return ip;
      }
    }
    app = await createServer(TestController, platformClass);
    server = app.getHttpServer();
  });

  afterEach(async () => {
    await app.close();
  });

  it('Default IP address', async () => {
    const { statusCode, text } = await request(server).get('/my-ip');
    expect(statusCode).toEqual(200);
    expect(text).toEqual('::ffff:127.0.0.1');
  });

  it.each(headers)('With header "%s": "%s" ', async (header, value, expected) => {
    const { statusCode, text } = await request(server)
      .get('/my-ip')
      .set({ [header]: value });
    expect(statusCode).toEqual(200);
    expect(text).toEqual(expected);
  });
});

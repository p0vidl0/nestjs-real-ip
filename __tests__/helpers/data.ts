import { ExpressAdapter } from '@nestjs/platform-express';
import { FastifyAdapter } from '@nestjs/platform-fastify';
import { Adapter } from './utils';

export const platforms: [string, Adapter][] = [
  ['Express', ExpressAdapter],
  ['Fastify', FastifyAdapter],
];

export const headers = [
  ['X-FORWARDED-FOR', '45.78.32.14, 78.32.45.14, 23.32.23.32', '45.78.32.14'],
  [
    'X-FORWARDED-FOR',
    '45.78.32.14, 2001:0db8:85a3:0000:0000:8a2e:0370:7334, 23.32.23.32',
    '45.78.32.14',
  ],
  [
    'X-FORWARDED-FOR',
    '2001:0db8:85a3:0000:0000:8a2e:0370:7334, 78.32.45.14, 23.32.23.32',
    '2001:0db8:85a3:0000:0000:8a2e:0370:7334',
  ],
  ['X-FORWARDED-FOR', 'unknown, 78.32.45.14', '78.32.45.14'],
  ['X-FORWARDED-FOR', '78.32.45.14:53242', '78.32.45.14'],
  ['x-client-ip', '78.45.32.14', '78.45.32.14'],
  ['x-client-ip', '2001:0db8:85a3:0000:0000:8a2e:0370:7334', '2001:0db8:85a3:0000:0000:8a2e:0370:7334'],
  ['fastly-client-ip', '78.45.32.14', '78.45.32.14'],
  [
    'fastly-client-ip',
    '2001:0db8:85a3:0000:0000:8a2e:0370:7334',
    '2001:0db8:85a3:0000:0000:8a2e:0370:7334',
  ],
  ['cf-connecting-ip', '78.45.32.14', '78.45.32.14'],
  [
    'cf-connecting-ip',
    '2001:0db8:85a3:0000:0000:8a2e:0370:7334',
    '2001:0db8:85a3:0000:0000:8a2e:0370:7334',
  ],
  ['true-client-ip', '78.45.32.14', '78.45.32.14'],
  [
    'true-client-ip',
    '2001:0db8:85a3:0000:0000:8a2e:0370:7334',
    '2001:0db8:85a3:0000:0000:8a2e:0370:7334',
  ],
  ['x-cluster-client-ip', '78.45.32.14', '78.45.32.14'],
  [
    'x-cluster-client-ip',
    '2001:0db8:85a3:0000:0000:8a2e:0370:7334',
    '2001:0db8:85a3:0000:0000:8a2e:0370:7334',
  ],
  ['x-forwarded', '127.0.0.1', '127.0.0.1'],
  ['x-forwarded', '2001:0db8:85a3:0000:0000:8a2e:0370:7334', '2001:0db8:85a3:0000:0000:8a2e:0370:7334'],
  ['forwarded-for', '78.45.32.14', '78.45.32.14'],
  [
    'forwarded-for',
    '2001:0db8:85a3:0000:0000:8a2e:0370:7334',
    '2001:0db8:85a3:0000:0000:8a2e:0370:7334',
  ],
  ['forwarded', '1.1.1.1', '1.1.1.1'],
  ['forwarded', '2001:0db8:85a3:0000:0000:8a2e:0370:7334', '2001:0db8:85a3:0000:0000:8a2e:0370:7334'],
];

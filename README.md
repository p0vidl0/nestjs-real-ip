# Nest.js real ip decorator

A concise decorator for retrieving an IP address from http request with Nest.js controller method.  

[![NPM package link](https://nodei.co/npm/nestjs-real-ip.png?downloads=true&cacheBust=2)](https://www.npmjs.com/package/nestjs-real-ip)

## Installation

```shell script
npm install nestjs-real-ip --save
```

## Example controller

```typescript
import { RealIP } from 'nestjs-real-ip';

@Controller('/')
class TestController {
  @Get('my-ip')
  get(@RealIP() ip: string): string {
    return ip;
  }
}
```

## Under the hood
Based on the tiny module [request-ip](https://github.com/pbojinov/request-ip).
It supports a wide list of request headers and properties to get working in almost any environment.
See the request-ip module description for details.

Also, see the decorator's [tests](__tests__/index.spec.ts).

## License
The code is under MIT license. See the LICENSE file for details.

## Development

```shell script
# Update code, commit and push with git
npm version [ major | minor | patch ]
npm publish
```

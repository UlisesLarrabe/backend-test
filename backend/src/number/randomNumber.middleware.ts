import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class RandomNumberMiddleware implements NestMiddleware {
  use(req: any, res: any, next: (error?: Error | any) => void) {
    console.log({ timestamp: new Date().toISOString() });
    next();
  }
}

import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { RandomNumberController } from './randomNumber.controller';
import { RandomNumberMiddleware } from './randomNumber.middleware';
@Module({
  controllers: [RandomNumberController],
})
export class RandomNumberModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RandomNumberMiddleware).forRoutes('randomNumber');
  }
}

import { Module } from '@nestjs/common';
import { RandomNumberModule } from './number/randomNumber.module';

@Module({
  imports: [RandomNumberModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

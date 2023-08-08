import { Module } from '@nestjs/common';
import { BookModule } from './Book/book.module';

@Module({
  imports: [BookModule],
  controllers: [],
  providers: [],
})
export class RootModule {}

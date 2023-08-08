/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { BookService } from './book.services';

@Module({
  // eslint-disable-next-line prettier/prettier
  imports: [],
  controllers: [],
  providers: [BookService],
})
export class BookModule {}

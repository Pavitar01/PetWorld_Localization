/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Put } from '@nestjs/common';
import { BookService } from './book.services';
import { Book } from './Data/book.dto';

@Controller('Book')
export class BookController {
  constructor(private bookService: BookService) {}
  // @Get('/allBooks')
  // findAll(): string {
  //   return this.bookService.addBookService();
  // }
  @Put('/addBook')
  addBooks(@Body() book: Book): string {
    return this.bookService.addBookService(book);
  }
}

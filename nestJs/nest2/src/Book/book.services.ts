/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Book } from './Data/book.dto';
@Injectable()
/* eslint-disable prettier/prettier */
export class BookService {
  public books: Book[] = [];

  //addbook
  findAll(): string {
    return 'This action returns all Books';
  }
  //addbook
  addBookService(book: Book): string {
    this.books.push(book);
    return 'book added successfully';
  }
  //update
  updateBookService(book: Book): string {
    const index = this.books.findIndex((curr) => {
      return curr.id == book.id;
    });
    this.books[index] = book;
    return 'Books has been updated';
  }
  //delete
  deleteBookService(bookid: string): string {
    this.books = this.books.filter((curr) => {
      return curr.id != bookid;
    });
    return 'Books has been deleted';
  }
}

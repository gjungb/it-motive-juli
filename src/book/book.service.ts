import { Injectable } from '@nestjs/common';
import { Book } from 'src/model/book.interface.js';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

import { readFile } from 'fs/promises';
import { join } from 'path';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class BookService {
  constructor(private readonly client: HttpService) {}

  create(createBookDto: CreateBookDto) {
    return 'This action adds a new book';
  }

  async findAll(): Promise<Book[]> {
    const path = join('src', 'data', 'books.json');
    const content = await readFile(path, { encoding: 'utf-8' });
    const books = JSON.parse(content);
    return books;
  }

  findAllViaHttp(): Promise<Book[]> {
    const url = 'https://api.itbook.store/1.0/new';
    const result$ =
      this.client.get<{ error: string; total: string; books: Book[] }>(url);

    return firstValueFrom(
      result$.pipe(
        map((value) => value.data.books),
        tap((resp) => console.log(resp)),
      ),
    );
  }

  /**
   *
   * @param isbn Die ISBN
   * @returns Ein Buch mit der passenden ISBN
   */
  async findOne(isbn: string): Promise<Book> {
    const books = await this.findAll();
    const book = books.find((value) => value.isbn === isbn);
    if (book) {
      return book;
    }
    throw new Error(`No Book found for ISBN ${isbn}`);
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}

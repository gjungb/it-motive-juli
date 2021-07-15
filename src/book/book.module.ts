import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { HttpModule } from '@nestjs/axios';
import { Agent } from 'https';

@Module({
  imports: [
    HttpModule.register({
      httpsAgent: new Agent({
        rejectUnauthorized: false,
      }),
    }),
  ],
  controllers: [BookController],
  providers: [
    BookService,
    {
      provide: 'API_URL',
      useValue: 'https://api.itbook.store/1.0',
    },
  ],
})
export class BookModule {}

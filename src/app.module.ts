import { Module } from '@nestjs/common';
import { BookModule } from './book/book.module';
import { PrismaModule } from './prisma/prisma.module';
import { MaterialModule } from './material/material.module';

@Module({
  imports: [BookModule, PrismaModule, MaterialModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

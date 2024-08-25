import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NinjasModule } from './books/books.module';
import { UsersModule } from './users/users.module';
import { BooksService } from './books/books.service';

@Module({
  imports: [NinjasModule, UsersModule],
  controllers: [AppController],
  providers: [AppService, BooksService],
})
export class AppModule {}

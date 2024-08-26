import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { UsersModule } from './users/users.module';
import { BooksService } from './books/books.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import config from './mikro-orm.config';

@Module({
  imports: [ MikroOrmModule.forRoot(config), BooksModule, UsersModule ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

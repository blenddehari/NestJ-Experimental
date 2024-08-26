import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Book } from './books.entity';

@Module({
    imports: [MikroOrmModule.forFeature([Book])],
	controllers: [BooksController],
	providers: [BooksService],
	exports: [BooksService],
})
export class BooksModule {}

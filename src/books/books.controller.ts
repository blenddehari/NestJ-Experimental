import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Post, Put, Query, UseGuards, ValidationPipe } from '@nestjs/common';
import { CreateBookDto } from '../../dto/create-book.dto';
import { UpdateBookDto } from '../../dto/update-book.dto';
import { BooksService } from './books.service';
import { Librarian } from 'src/librarian/librarian.guard';

@Controller('books')
export class BooksController {
	constructor(private readonly booksService: BooksService) {}
		
	@Get()
	getBooks(@Query('genre') genre: 'fiction' | 'non-fiction') {
		return this.booksService.getBooks(genre);
	}

	@Get(':id')
	getOneBook(@Param('id', ParseIntPipe) id: number) {
		try {
			return this.booksService.getBook(id);
		} catch (error) {
			return new NotFoundException(error.message);
		}
	}

	@Post()
	@UseGuards(Librarian)
	createBook(@Body(new ValidationPipe) createBookDto: CreateBookDto) {
		return this.booksService.createBook(createBookDto);
	}

	@Put(':id')
	updateBook(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
		return this.booksService.updateBook(+id, updateBookDto);
	}

	@Delete(':id')
	deleteBook(@Param('id') id: string) {
		return this.booksService.deleteBook(+id);
	}
}

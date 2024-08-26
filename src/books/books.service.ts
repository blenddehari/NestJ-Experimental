import { InjectEntityManager, InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/core';
import { EntityManager } from '@mikro-orm/postgresql';
import { Injectable } from '@nestjs/common';
import { CreateBookDto } from 'dto/create-book.dto';
import { UpdateBookDto } from 'dto/update-book.dto';
import { Book } from './books.entity';

@Injectable()
export class BooksService {
	constructor(
		@InjectRepository(Book)
    	private readonly bookRepository: EntityRepository<Book>,
		// @InjectEntityManager()
		private readonly em: EntityManager,
	) {}

	async findAll() {
		return this.bookRepository.findAll();
	}

	async getBook(id: number) {
		return this.bookRepository.findOne(id);
	}

	async getBooks(genre?: string) {
		if (genre) {
			return this.bookRepository.find({ genre });
		}
		return this.bookRepository.findAll();
	}

	async createBook(createBookDto: CreateBookDto) {
		const newBook = this.bookRepository.create(createBookDto);
		await this.em.persistAndFlush(newBook);
		return newBook;
	}

	async updateBook(id: number, updateBookDto: UpdateBookDto) {
		const book = await this.bookRepository.findOne(id);
		if (!book) {
			throw new Error('Book not found');
		}
		Object.assign(book, updateBookDto);
		await this.em.persistAndFlush(book);
		return book;
	}

	async deleteBook(id: number) {
		const book = await this.bookRepository.findOne(id);
		if (!book) {
			throw new Error('Book not found');
		}
		await this.em.removeAndFlush(book);
		return book;
	}
}

import { Injectable } from '@nestjs/common';
import { CreateBookDto } from 'dto/create-book.dto';
import { UpdateBookDto } from 'dto/update-book.dto';

@Injectable()
export class BooksService {
	private books = [
		{ id: 1, title: 'Book 1', author: 'Author 1', genre: 'Fiction' },
		{ id: 2, title: 'Book 2', author: 'Author 2', genre: 'Non-fiction' },
		{ id: 3, title: 'Book 3', author: 'Author 3', genre: 'Fiction' },
		{ id: 4, title: 'Book 4', author: 'Author 4', genre: 'Non-fiction' },
	];

	findAll() {
		return this.books;
	}

	getBook(id: number) {
		const book = this.books.find(book => book.id === id);

		if (!book) {
			throw new Error('Book not found');
		}

		return book;
	}

	getBooks(genre?: string) {
		if (genre) {
			return this.books.filter(book => book.genre === genre);
		}
		return this.books;
	}

	createBook(createBookDto: CreateBookDto) {
		const id = this.books.length + 1;
		const newBook = { id, ...createBookDto };
		this.books.push(newBook);
		return newBook;
	}

	updateBook(id: number, updateBookDto: UpdateBookDto) {
		this.books = this.books.map(book => {
			if (book.id === id) {
				return { ...book, ...updateBookDto };
			}
			return book;
		});
	}

	deleteBook(id: number) {
		const toBeRemoved = this.getBook(id);
		this.books = this.books.filter(book => book.id !== id);
		return toBeRemoved;
	}
}

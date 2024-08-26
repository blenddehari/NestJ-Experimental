import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

// /src/books/books-entity.ts

@Entity()
export class Book {
	@PrimaryKey()
	id!: number;

	@Property()
	title!: string;

	@Property()
	author!: string;

	@Property()
	genre!: string;
}

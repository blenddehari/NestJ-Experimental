import { IsEnum, Max, MinLength } from "class-validator";


// library/dto/create-book.dto.ts
export class CreateBookDto {
	@MinLength(3)
	title: string;

	@MinLength(3)
	author: string;

	@IsEnum(['fiction', 'non-fiction'], { message: 'Genre must be fiction or non-fiction' })
	genre: 'fiction' | 'non-fiction';
}
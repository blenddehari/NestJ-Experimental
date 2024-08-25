import { IsEnum, MinLength } from 'class-validator';

// library/dto/update-book.dto.ts
export class UpdateBookDto {
	@MinLength(3)
	title?: string;

	@MinLength(3)
	author?: string;

	@IsEnum(['fiction', 'non-fiction'], { message: 'Genre must be fiction or non-fiction' })
	genre?: 'fiction' | 'non-fiction';
}

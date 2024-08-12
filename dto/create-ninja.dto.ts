import { IsEnum, Max, MinLength } from "class-validator";

export class CreateNinjaDto {
	@MinLength(3)
    name: string;

	@Max(120)
    age: number;

	@IsEnum(['black', 'yellow'], { message: 'Belt must be black or yellow' })
    belt: 'black' | 'yellow';
}

import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ParseBoolPipe } from '@nestjs/common';

@Injectable()
export class Librarian implements CanActivate {
	canActivate(
		context: ExecutionContext,
	): boolean | Promise<boolean> | Observable<boolean> {
		const request = context.switchToHttp().getRequest()

		// validate request: only mentors can access this route
		const librarianHeader = request.headers.librarian
		const isLibrarian = librarianHeader ? new ParseBoolPipe().transform(librarianHeader, { type: 'query' }) : false
		return isLibrarian
	}
}

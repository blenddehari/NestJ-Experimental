import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ParseBoolPipe } from '@nestjs/common';

@Injectable()
export class MentorGuard implements CanActivate {
	canActivate(
		context: ExecutionContext,
	): boolean | Promise<boolean> | Observable<boolean> {
		const request = context.switchToHttp().getRequest()

		// validate request: only mentors can access this route
		const mentorHeader = request.headers.mentor
		const isMentor = mentorHeader ? new ParseBoolPipe().transform(mentorHeader, { type: 'query' }) : false
		return isMentor
	}
}

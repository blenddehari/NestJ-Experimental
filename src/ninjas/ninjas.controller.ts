import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, Query } from '@nestjs/common';
import { CreateNinjaDto } from 'dto/create-ninja.dto';
import { UpdateNinjaDto } from 'dto/update-ninja.dto';
import { NinjasService } from './ninjas.service';

@Controller('ninjas')
export class NinjasController {
	constructor(private readonly ninjasService: NinjasService) {}
		
	// GET /ninjas?type=fast => { message: 'All ninjas', type: 'fast' }
	@Get()
	getNinjas(@Query('belt') belt: 'black' | 'yellow') {
		return this.ninjasService.getNinjas(belt)
	}

	@Get(':id')
	getOneNinja(@Param('id') id: string) {
		try {
			return this.ninjasService.getNinja(+id)
		} catch (error) {
			return new NotFoundException(error.message)
		}
	}

	@Post()
	createNinja(@Body() createNinjaDto: CreateNinjaDto) {
		return this.ninjasService.createNinja(createNinjaDto)
	}

	@Put(':id')
	updateNinja(@Param('id') id: string, @Body() updateNinjaDto: UpdateNinjaDto) {
		return this.ninjasService.updateNinja(+id, updateNinjaDto)
	}

	@Delete(':id')
	deleteNinja(@Param('id') id: string) {
		return this.ninjasService.deleteNinja(+id)
	}


}

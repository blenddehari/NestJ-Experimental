import { Injectable } from '@nestjs/common';
import { CreateNinjaDto } from 'dto/create-ninja.dto';
import { UpdateNinjaDto } from 'dto/update-ninja.dto';

@Injectable()
export class NinjasService {
	private ninjas = [
		{ id: 1, name: 'Naruto', age: 16, belt: 'black' },
		{ id: 2, name: 'Sasuke', age: 16, belt: 'black' },
		{ id: 3, name: 'Sakura', age: 16, belt: 'yellow' },
		{ id: 4, name: 'Kakashi', age: 30, belt: 'black' },
	];

	findAll() {
		return this.ninjas
	}

	getNinja(id: number) {
		const ninja = this.ninjas.find(ninja => ninja.id === id)

		if (!ninja) {
			throw new Error('Ninja not found')
		}

		return ninja
	}

	getNinjas(belt?: 'black' | 'yellow') {
		if (belt) {
			return this.ninjas.filter(ninja => ninja.belt === belt)
		}
		return this.ninjas
	}

	createNinja(createNinjaDto: CreateNinjaDto) {
		const id = this.ninjas.length + 1
		const newNinja = { id, ...createNinjaDto }
		this.ninjas.push(newNinja)
		return newNinja
	}

	updateNinja(id: number, updateNinjaDto: UpdateNinjaDto) {
		this.ninjas = this.ninjas.map(ninja => {
		if (ninja.id === id) {
			return { ...ninja, ...updateNinjaDto }
		}
		return ninja
		})
	}

	deleteNinja(id: number) {
		const toBeRemoved = this.getNinja(id)
		this.ninjas = this.ninjas.filter(ninja => ninja.id !== id)
		return toBeRemoved
	}
		
}
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { createNinjaDto } from './dto/create-ninja.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NinjasService {
  private ninjas = [
    { id: 0, name: 'ninjaA', weapon: 'stars' },
    { id: 1, name: 'ninjab', weapon: 'nunchucks' },
  ];

  getNinjas(weapon?: 'stars' | 'nunchucks') {
    if (weapon) {
      return this.ninjas.filter((ninja) => ninja.weapon === weapon);
    }
    return this.ninjas;
  }

  getNinjas(id: number) {
    const ninja = this.ninjas.filter((ninja) => ninja.id === id);
    if (!ninja) {
      throw new Error('ninja not found');
    }
    return ninja;
  }

  createNinja(createNinjaDto: createNinjaDto) {
    const newNinja = {
      ...createNinjaDto,
      id: Date.now(),
    };
    this.ninjas.push(newNinja);
    return newNinja;
  }

  UpdateNinja(id: number, UpdateNinjaDto: UpdateNinjaDto) {
    this.ninjas = this.ninjas.map((ninja) => {
      if (ninja.id === id) {
        return { ...ninja, ...UpdateNinjaDto };
      }
      return ninja;
    });
    return this.getNinja(id);
  }

  removeNinja(id: number) {
    const toBeRemoved = this.getNinja(id);

    this.ninjas = this.ninjas.filter((ninja) => ninja !== id);
    return toBeRemoved;
  }
}

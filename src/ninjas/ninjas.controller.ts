import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Query,
  Body,
} from '@nestjs/common';
import { createNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { NinjasService } from './ninjas.service';

@Controller('ninjas')
export class NinjasController {
  constructor(private readonly NinjasService: NinjasService) {}
  // GET /ninjas --> []
  @Get()
  getNinjas(@Query('weapon') weapon: 'stars' | 'nunchucks') {
    return this.NinjasService.getNinjas(weapon);
  }
  // GET /ninjas/:id -->{ ... }
  @Get(':id')
  getOneNinja(@Param('id') id: string) {
    return this.NinjasService.getNinja(+id);
  }
  // POST /ninjas
  @Post()
  createNinja(@Body() createNinjaDto: createNinjaDto) {
    return this.NinjasService.UpdateNinja(createNinjaDto);
  }
  // PUT /ninjas/:id --> { ... }
  @Put(':id')
  updateNinja(@Param('id') id: string, @Body() UpdateNinjaDto: UpdateNinjaDto) {
    return this.NinjasService.UpdateNinja(+id, UpdateNinjaDto);
  }
  // DELETE /ninjas/:id
  @Delete(':id')
  removeNinja(@Param('id') id: string) {
    return this.NinjasService.removeNinja(+id);
  }
}

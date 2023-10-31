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

@Controller('ninjas')
export class NinjasController {
  // GET /ninjas --> []
  @Get()
  getNinjas(@Query('type') type: string) {
    return [{ type }];
  }
  // GET /ninjas/:id -->{ ... }
  @Get(':id')
  getOneNinja(@Param('id') id: string) {
    return {
      id,
    };
  }
  // POST /ninjas
  @Post()
  createNinja(@Body() createNinjaDto: createNinjaDto) {
    return {
      name: createNinjaDto.name,
    };
  }
  // PUT /ninjas/:id --> { ... }
  @Put(':id')
  updateNinja(@Param('id') id: string, @Body() UpdateNinjaDto: UpdateNinjaDto) {
    return {
      id,
      name: UpdateNinjaDto,
    };
  }
  // DELETE /ninjas/:id
  @Delete(':id')
  removeNinja(@Param('id') id: string) {
    return {
      id,
    };
  }
}

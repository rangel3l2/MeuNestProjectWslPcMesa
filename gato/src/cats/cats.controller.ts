import { Body, Controller, Get, Post } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCat } from './entity/create.cat';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}
 
  @Get('a')
  getHello(): string {
    return this.catsService.getHello();
  }
  @Post('create')
   async createCat(@Body() createCat : CreateCat){
    this.catsService.create(createCat)
   }
   @Get('todos')
   async findAll(): Promise<CreateCat[]> {
     return this.catsService.findAll();
   }

}
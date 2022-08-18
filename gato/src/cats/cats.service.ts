import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateCat } from './entity/create.cat';
@Injectable()
export class CatsService {
  
    getHello(): string {
        return 'Hello World!';
    }
    constructor(
        @Inject('CATS_REPOSITORY')
        private catsRepository: Repository<CreateCat>,
    ) {}


    async create (cat: CreateCat){
    this.catsRepository.save(cat)
    }
    async findAll():Promise<CreateCat[]>{
        return this.catsRepository.find()
    }

}


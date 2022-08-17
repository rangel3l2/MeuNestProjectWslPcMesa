import { Repository } from 'typeorm';
import { CreateCat } from './entity/create.cat';
export declare class CatsService {
    private catsRepository;
    getHello(): string;
    constructor(catsRepository: Repository<CreateCat>);
    create(cat: CreateCat): Promise<void>;
    findAll(): Promise<CreateCat[]>;
}

import { CatsService } from './cats.service';
import { CreateCat } from './entity/create.cat';
export declare class CatsController {
    private readonly catsService;
    constructor(catsService: CatsService);
    getHello(): string;
    createCat(createCat: CreateCat): Promise<void>;
    findAll(): Promise<CreateCat[]>;
}

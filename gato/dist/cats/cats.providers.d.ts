import { DataSource } from 'typeorm';
import { CreateCat } from './entity/create.cat';
export declare const catsProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<CreateCat>;
    inject: string[];
}[];

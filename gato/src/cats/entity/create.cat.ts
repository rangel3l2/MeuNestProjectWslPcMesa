import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"


@Entity()
export class CreateCat{
    @PrimaryGeneratedColumn()
    id : String
    @Column()
    nome : String
    @Column()
    idade : number    
}
import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity()
export class Student extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('text', { nullable: false })
    firstName: string;

    @Column('text', { nullable: false })
    lastName: string;
}

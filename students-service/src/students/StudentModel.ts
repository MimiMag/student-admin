import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne} from "typeorm";
import { Batch } from '../batches/BatchModel'
@Entity()
export class Student extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('text', { nullable: false })
    firstName: string;

    @Column('text', { nullable: false })
    lastName: string;

    @Column('text')
    pictureUrl: string;

    @ManyToOne(type => Batch, batch => batch.students)
    batch: Batch;

}

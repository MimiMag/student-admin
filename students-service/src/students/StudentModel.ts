import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, OneToMany} from "typeorm";
import { Batch } from '../batches/BatchModel'
import { Assignment } from "../homework/AssignmentModel";

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

    @ManyToOne(type => Batch, batch => batch.students, {
        eager: true
    })
    batch: Batch;

    @OneToMany(type => Assignment, assignment => assignment.student)
    assignments: Assignment[]
}

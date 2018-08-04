import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from "typeorm";
import { Assignment } from './AssignmentModel'

@Entity()
export class Homework extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  title: string;

  @Column('int')
  totalScore: number;
  
  @OneToMany(type => Assignment, assignment => assignment.homework)
  assignments: Assignment[];
}

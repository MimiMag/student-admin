import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne } from "typeorm";
import { Homework } from './HomeworkModel'
import { Student } from "../students/StudentModel";

@Entity()
export class Assignment extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column('date')
  deadLine: Date;

  @Column('int')
  score: number;

  @ManyToOne(type => Homework, homework => homework.assignments, {
    eager: true
  })
  homework: Homework;

 @ManyToOne(type => Student, student => student.assignments, {
   eager: true
 })
 student: Student

}

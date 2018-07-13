import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from "typeorm";
import { Student } from '../students/StudentModel'
@Entity()
export class Batch extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column('int', { nullable: false })
  number: number;

  @Column('date')
  startDate: Date;

  @Column('date')
  graduationDate: Date;

  @OneToMany(type => Student,  student  => student.batch)
  students: Student[];

}

import { Controller, Param, Body, Get, Post, Put, Delete, NotFoundError } from "routing-controllers";
import { Student } from "./StudentModel";

@Controller()
export class StudentController {

  @Get("/students")
  async getAllStudents() {
    const students = await Student.find()
    return { students }
  }

  @Get("/students/:id")
  async getOne(@Param("id") id: number) {
    const student = await Student.findOneById(id)
    if (!student) throw new NotFoundError('Cannot find student')
    return student
  }

  @Post("/students")
  async post(@Body() student: Student) {
    const newStudent = await Student.save(student)
    return newStudent
  }

  @Put("/students/:id")
  async updateStudent( @Param('id') id: number, @Body() update: Partial<Student> ) {
    const student = await Student.findOneById(id)
    if (!student) throw new NotFoundError('Cannot find student')

    return Student.merge(student, update).save()
  }

  @Delete("/students/:id")
  async remove(@Param("id") id: number) {
    const student = await Student.findOneById(id)
    if (!student) throw new NotFoundError('Cannot find student')
    Student.remove(student)
    return "Removing student...";
  }

}

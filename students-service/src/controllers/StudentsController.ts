import { Controller, Param, Body, Get, Post, Put, Delete } from "routing-controllers";

@Controller()
export class StudentController {

  @Get("/students")
  getAll() {
    return "This action returns all students";
  }

  @Get("/students/:id")
  getOne(@Param("id") id: number) {
    return "This action returns student #" + id;
  }

  @Post("/students")
  post(@Body() student: any) {
    return "Saving student...";
  }

  @Put("/students/:id")
  put(@Param("id") id: number, @Body() student: any) {
    return "Updating a student...";
  }

  @Delete("/students/:id")
  remove(@Param("id") id: number) {
    return "Removing student...";
  }

}

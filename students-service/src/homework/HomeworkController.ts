import { Controller, Param, Body, Get, Post, Put, Delete, NotFoundError } from "routing-controllers";
import { Homework } from "./HomeworkModel";

@Controller()
export class HomeworkController {

  @Get("/homework")
  async getAllHomework() {
    const homework = await Homework.find()
    return { homework }
  }

  @Get("/homework/:id")
  async getOne(@Param("id") id: number) {
    const homework = await Homework.findOneById(id)
    if (!homework) throw new NotFoundError('Cannot find homework')
    return homework
  }

  @Post("/homework")
  async post(@Body() homework: Homework) {
    const newHomework = await Homework.save(homework)
    return newHomework
  }

  @Put("/homework/:id")
  async updateHomework(@Param('id') id: number, @Body() update: Partial<Homework>) {
    const homework = await Homework.findOneById(id)
    if (!homework) throw new NotFoundError('Cannot find homework')

    return Homework.merge(homework, update).save()
  }

  @Delete("/homework/:id")
  async remove(@Param("id") id: number) {
    const homework = await Homework.findOneById(id)
    if (!homework) throw new NotFoundError('Cannot find homework')
    Homework.remove(homework)
    return "Removing homework...";
  }

}

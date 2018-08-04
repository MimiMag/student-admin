import { Controller, Param, Body, Get, Post, Put, Delete, NotFoundError } from "routing-controllers";
import { Assignment } from "./AssignmentModel";

@Controller()
export class AssignmentController {

  @Get("/assignments")
  async getAllAssignments() {
    const assignments = await Assignment.find()
    return { assignments }
  }

  @Get("/assignments/:id")
  async getOne(@Param("id") id: number) {
    const assignment = await Assignment.findOneById(id)
    if (!assignment) throw new NotFoundError('Cannot find assignment')
    return assignment
  }

  @Post("/assignments")
  async post(@Body() assignment: Assignment) {
    const newAssignment = await Assignment.save(assignment)
    return newAssignment
  }

  @Put("/assignments/:id")
  async updateAssignment(@Param('id') id: number, @Body() update: Partial<Assignment>) {
    const assignment = await Assignment.findOneById(id)
    if (!assignment) throw new NotFoundError('Cannot find assignment')

    return Assignment.merge(assignment, update).save()
  }

  @Delete("/assignments/:id")
  async remove(@Param("id") id: number) {
    const assignment = await Assignment.findOneById(id)
    if (!assignment) throw new NotFoundError('Cannot find assignment')
    Assignment.remove(assignment)
    return "Removing assignment...";
  }

}

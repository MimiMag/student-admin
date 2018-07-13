import { Controller, Param, Body, Get, Post, Put, Delete, NotFoundError } from "routing-controllers";
import { Batch } from "./BatchModel";

@Controller()
export class BatchController {

  @Get("/batches")
  async getAllBatches() {
    const batches = await Batch.find()
    return { batches }
  }

  @Get("/batches/:id")
  async getOne(@Param("id") id: number) {
    const batch = await Batch.findOneById(id)
    if (!batch) throw new NotFoundError('Cannot find batch')
    return batch
  }

  @Post("/batches")
  async post(@Body() batch: Batch) {
    const newBatch = await Batch.save(batch)
    return newBatch
  }

  @Put("/batches/:id")
  async updateBatch( @Param('id') id: number, @Body() update: Partial<Batch> ) {
    const batch = await Batch.findOneById(id)
    if (!batch) throw new NotFoundError('Cannot find batch')

    return Batch.merge(batch, update).save()
  }

  @Delete("/batches/:id")
  async remove(@Param("id") id: number) {
    const batch = await Batch.findOneById(id)
    if (!batch) throw new NotFoundError('Cannot find batch')
    Batch.remove(batch)
    return "Removing batch...";
  }

}

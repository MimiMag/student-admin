import "reflect-metadata";
import { createConnection } from "typeorm";
import { createKoaServer } from "routing-controllers"
import { StudentController } from "./students/StudentsController"
import { BatchController } from "./batches/BatchesController";

createConnection().then(async connection => {
  const port = process.env.PORT || 4001

  const app = createKoaServer({
    cors: true,
    controllers: [StudentController, BatchController]
  })

  app.listen(port, () => console.log(`Listening on port ${port}`))
    
}).catch(error => console.log(error));

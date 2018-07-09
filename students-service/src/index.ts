import "reflect-metadata";
import { createConnection } from "typeorm";
import { Student } from "./entity/Student";
import { createKoaServer } from "routing-controllers"
import { StudentController } from "./controllers/StudentsController"
import { seeding } from "./migration/seeds"

createConnection().then(async connection => {
  seeding()
  const students = await connection.manager.find(Student);
  console.log("Loaded students: ", students);
  const port = process.env.PORT || 4001

  const app = createKoaServer({
    controllers: [StudentController]
  })

  app.listen(port, () => console.log(`Listening on port ${port}`))
    
}).catch(error => console.log(error));

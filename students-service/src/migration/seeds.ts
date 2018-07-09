import { Student } from "../entity/Student";
import { getConnection } from "typeorm"

// console.log("Inserting a new student into the database...");
//   const student = new Student();
//   student.firstName = "Timber";
//   student.lastName = "Saw";
//   await getConnection().manager.save(student);
//   console.log("Saved a new student with id: " + student.id);

//   console.log("Loading students from the database...");


const studentData = [
 { firstName: 'Grace', lastName: 'Hopper' },
 { firstName: 'Alan', lastName: 'Turing' },
 { firstName: 'Barbara', lastName: 'Liskov' },
 { firstName: 'Martin', lastName: 'Fowler' },
 { firstName: 'Frederic', lastName: 'Chopin'},
 { firstName: 'Hildegard', lastName: 'Von Bingen' },
 { firstName: 'Pyotr Ylyich', lastName: 'Tchaikovsky' },
 { firstName: 'Louis', lastName: 'Andriessen' },
 { firstName: 'Donald', lastName: 'Duck' },
 { firstName: 'John', lastName: 'Smith', }
]

export const seeding = () => {
  Student.remove
  studentData.map(async (sd) => {
    const student = new Student();
    student.firstName = sd.firstName
    student.lastName = sd.lastName
    await getConnection().manager.save(student)
  })
} 

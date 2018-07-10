import { Student } from "./students/StudentModel";
import { createConnection } from "typeorm"

interface StudentData {
  firstName: string
  lastName: string
}

const studentData: StudentData[] = [
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

const seeding = async () => {
  const students = await Student.find()
  console.log("Students!!!!:", students)
  await Student.remove(students)

  studentData.map(async (sd) => {
    const student = await new Student();
    student.firstName = sd.firstName
    student.lastName = sd.lastName
    student.pictureUrl = 'https://ei.marketwatch.com/Multimedia/2015/07/24/Photos/MG/MW-DQ790_ARENDS_20150724151031_MG.jpg?uuid=3e3aa90a-0253-11e6-806d-0015c588dfa6'
    student.save()
  })
} 

createConnection().then(() => {
  seeding()
}).catch(err => {console.log()})




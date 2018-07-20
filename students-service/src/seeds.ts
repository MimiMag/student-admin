import { Student } from "./students/StudentModel";
import { Batch } from "./batches/BatchModel"
import { createConnection } from "typeorm"

interface StudentData {
  id?: number
  firstName: string
  lastName: string
}

interface BatchData{
  id?: number
  number: number
  startDate: Date
  graduationDate: Date
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

const batchData: BatchData[] = [
  { number: 2, startDate: new Date('January 1, 2017'), graduationDate: new Date('June 1, 2017')},
  { number: 2, startDate: new Date('July 1, 2017'), graduationDate: new Date('January 1, 2018') },
  { number: 3, startDate: new Date('December 1, 2017'), graduationDate: new Date('May 1, 2017') }
]

const seeding = async () => {
  const students = await Student.find()
  const batches = await Batch.find()
  await Student.remove(students)
  await Batch.remove(batches)

  console.log('I removed all data')

  batchData.map(async (cd) => {
    const batch = await new Batch();
    batch.number = cd.number
    batch.startDate = cd.startDate
    batch.graduationDate = cd.graduationDate
    batch.save()
  })

  console.log('I saved some batches')

  const batch1 = await new Batch();
  batch1.number = 1
  batch1.startDate = new Date('January 1, 2017')
  batch1.graduationDate = new Date('June 1, 2017')
  batch1.save()

  console.log('I saved the batch with students: ', batch1)

  studentData.map(async (sd) => {
    const student = await new Student();
    student.firstName = sd.firstName
    student.lastName = sd.lastName
    student.pictureUrl = 'https://ei.marketwatch.com/Multimedia/2015/07/24/Photos/MG/MW-DQ790_ARENDS_20150724151031_MG.jpg?uuid=3e3aa90a-0253-11e6-806d-0015c588dfa6'
    student.batch = batch1
    student.save()
  })

  console.log('I saved all students with a batch')

} 

createConnection().then(() => {
  seeding()
}).catch(err => {console.log()})




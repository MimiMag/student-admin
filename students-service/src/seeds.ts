import { Student } from "./students/StudentModel";
import { Batch } from "./batches/BatchModel"
import { createConnection } from "typeorm"
import { Assignment } from "./homework/AssignmentModel";
import { Homework } from "./homework/HomeworkModel";

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

interface HomeworkData {
  id?: number
  title: string
  totalScore: number
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
  { number: 3, startDate: new Date('July 1, 2017'), graduationDate: new Date('January 1, 2018') },
  { number: 4, startDate: new Date('December 1, 2017'), graduationDate: new Date('May 1, 2017') }
]

const homeworkData: HomeworkData[] = [
  { title: 'JS I', totalScore: 17 },
  { title: 'Build A Game', totalScore: 12 },
  { title: 'Final Assignment', totalScore: 20 }
]

const removeAll = async (model) => {
  const instances = await model.find()
  await model.remove(instances)
}

const seeding = async () => {
  await removeAll(Assignment)
  await removeAll(Student)
  await removeAll(Batch)
  await removeAll(Homework)
  console.log('I removed all data')

  homeworkData.map( async (hd) => {
    let homework = await new Homework();
    homework.title = hd.title
    homework.totalScore = hd.totalScore
    await homework.save()
  })

  batchData.map(async (cd) => {
    const batch = await new Batch();
    batch.number = cd.number
    batch.startDate = cd.startDate
    batch.graduationDate = cd.graduationDate
    batch.save()
  })

  const batch1 = await new Batch();
  batch1.number = 1
  batch1.startDate = new Date('January 1, 2017')
  batch1.graduationDate = new Date('June 1, 2017')
  await batch1.save()

  studentData.map(async (sd) => {
    const student = await new Student();
    student.firstName = sd.firstName
    student.lastName = sd.lastName
    student.pictureUrl = 'https://ei.marketwatch.com/Multimedia/2015/07/24/Photos/MG/MW-DQ790_ARENDS_20150724151031_MG.jpg?uuid=3e3aa90a-0253-11e6-806d-0015c588dfa6'
    student.batch = batch1
    await student.save()

    let deadLines = [new Date('May 8, 2017'), new Date('January 8, 2017'), new Date('January 8, 2017')]
    deadLines.map(async (date, index) => {
      const currentStudent = await Student.find({ firstName: sd.firstName })[0]
      const allHomework = await Homework.find()

      const assignment = await new Assignment()
      assignment.homework = allHomework[index]
      assignment.score = Math.floor(Math.random() * Math.floor(allHomework[index].totalScore))
      assignment.deadLine = date
      assignment.student = currentStudent
      await assignment.save()
    })
  })
} 

createConnection().then(() => {
  seeding().then(() => {
    console.log('Seeding done!')
  }).catch(err => { console.log(err) })
}).catch(err => { console.log(err) })




import { FETCHED_ALL_STUDENTS } from '../actions/fetchStudents'

export default function (state = [], { type, payload } = {}) {
  switch (type) {
    case FETCHED_ALL_STUDENTS:
      return state.concat(payload.students)
    default:
      return state
  }
}

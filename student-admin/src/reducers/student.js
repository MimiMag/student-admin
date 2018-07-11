import { FETCHED_DETAILED_STUDENT } from '../actions/fetchStudents'

export default function (state = null, { type, payload }) {
  switch (type) {
    case FETCHED_DETAILED_STUDENT:
      return payload

    default:
      return state
  }
}

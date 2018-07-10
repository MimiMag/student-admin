import * as request from 'superagent'

const baseUrl = 'http://localhost:4001'

export const FETCHED_DETAILED_STUDENT = 'FETCHED_DETAILED_STUDENT'
export const FETCHED_ALL_STUDENTS = 'FETCHED_ALL_STUDENTS'

export const fetchStudent = (studentId) => (dispatch) => {
  request
    .get(`${baseUrl}/students/${studentId}`)
    .then(response => dispatch({
      type: FETCHED_DETAILED_STUDENT,
      payload: response.body
    }))
    .catch(err => alert(err))
}

export const fetchAllStudents = () => (dispatch) => {
  request
    .get(`${baseUrl}/students`)
    .then(response => dispatch({
      type: FETCHED_ALL_STUDENTS,
      payload: response.body
    }))
    .catch(err => alert(err))
}

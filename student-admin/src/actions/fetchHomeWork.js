import * as request from 'superagent'

const baseUrl = 'http://localhost:4001'

export const FETCHED_ALL_HOMEWORK = 'FETCHED_ALL_HOMEWORK'

export const fetchAllHomework = () => (dispatch) => {
  request
    .get(`${baseUrl}/homework`)
    .then(response => dispatch({
      type: FETCHED_ALL_HOMEWORK,
      payload: response.body
    }))
    .catch(err => alert(err))
}

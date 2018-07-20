import * as request from 'superagent'

const baseUrl = 'http://localhost:4001'

export const FETCHED_DETAILED_BATCH = 'FETCHED_DETAILED_BATCH'
export const FETCHED_ALL_BATCHES = 'FETCHED_ALL_BATCHES'

export const fetchBatch = (batchId) => (dispatch) => {
  request
    .get(`${baseUrl}/batches/${batchId}`)
    .then(response => dispatch({
      type: FETCHED_DETAILED_BATCH,
      payload: response.body
    }))
    .catch(err => alert(err))
}

export const fetchAllBatches = () => (dispatch) => {
  request
    .get(`${baseUrl}/batches`)
    .then(response => dispatch({
      type: FETCHED_ALL_BATCHES,
      payload: response.body
    }))
    .catch(err => alert(err))
}

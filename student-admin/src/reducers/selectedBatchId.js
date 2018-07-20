import { SELECTED_BATCH_ID } from '../actions/selectBatchId'

export default function (state = 1, { type, payload }) {
  console.log('HELLOOOOO')
  switch (type) {
    case SELECTED_BATCH_ID:
      return payload
    default:
      return state
  }
}

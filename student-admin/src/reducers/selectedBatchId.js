import { SELECTED_BATCH_ID } from '../actions/selectBatchId'

export default function (state = '0', { type, payload }) {
  switch (type) {
    case SELECTED_BATCH_ID:
      return payload
    default:
      return state
  }
}

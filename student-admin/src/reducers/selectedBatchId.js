import { SELECTED_BATCH_ID } from '../actions/selectBatchId'

export default function (state = 'All', { type, payload }) {
  switch (type) {
    case SELECTED_BATCH_ID:
      return `${payload}`
    default:
      return state
  }
}

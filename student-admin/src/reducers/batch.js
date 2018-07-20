import { FETCHED_DETAILED_BATCH } from '../actions/fetchBatches'

export default function (state = null, { type, payload }) {
  switch (type) {
    case FETCHED_DETAILED_BATCH:
      return payload

    default:
      return state
  }
}

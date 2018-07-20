import { FETCHED_ALL_BATCHES } from '../actions/fetchBatches'

export default function (state = [], { type, payload } = {}) {
  switch (type) {
    case FETCHED_ALL_BATCHES:
      return state.concat(payload.batches)
    default:
      return state
  }
}

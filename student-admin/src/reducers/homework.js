import { FETCHED_ALL_HOMEWORK } from '../actions/fetchHomeWork'

export default function (state = [], { type, payload } = {}) {
  switch (type) {
    case FETCHED_ALL_HOMEWORK:
      return state.concat(payload.homework)
    default:
      return state
  }
}

export const SELECTED_BATCH_ID = 'SELECTED_BATCH_ID'

export const selectBatchId = (batchId) => {
  return {
    type: SELECTED_BATCH_ID,
    payload: batchId
  }
}

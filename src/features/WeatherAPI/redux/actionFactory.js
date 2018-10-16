
import { createActions } from 'redux-actions'

/* Return Format:
{
  types: {
    FETCH_DATA_REQUEST: 'FETCH_DATA_REQUEST',
    FETCH_DATA_SUCCESS: 'FETCH_DATA_SUCCESS',
    FETCH_DATA_FAILURE: 'FETCH_DATA_FAILURE',
  },
  actions: {
    fetchDataRequest: payload => ({ type: 'FETCH_DATA_REQUEST', payload }),
    fetchDataSuccess: payload => ({ type: 'FETCH_DATA_SUCCESS', payload }),
    fetchDataFailure: payload => ({ type: 'FETCH_DATA_FAILURE', payload }),
  }
}
*/
export const createRequestedActions = requestedActions => {
  const types = {}

  requestedActions.forEach(action => {
    types[`${action}_REQUEST`] = `${action}_REQUEST`
    types[`${action}_SUCCESS`] = `${action}_SUCCESS`
    types[`${action}_FAILURE`] = `${action}_FAILURE`
  })

  return {
    types,
    actions: createActions({}, ...Object.keys(types))
  }
}

import { handleActions } from 'redux-actions'
import { combineEpics, ofType } from 'redux-observable'
import { from, of } from 'rxjs'
import { mergeMap, map, catchError } from 'rxjs/operators'

import { createRequestedActions } from './actionFactory'
import * as apis from '../apis'

export const { types, actions } = createRequestedActions([
  'FETCH_WEATHER'
])

const INIT_STATE = {
  loading: false,
  error: null,
  data: {}
}

// epic
const fetchWeatherEpic = action$ => action$.pipe(
  ofType(types.FETCH_WEATHER_REQUEST),
  mergeMap(action =>
    from(apis.searchCityWeather(action.payload)).pipe(
      map(response => actions.fetchWeatherSuccess(response)),
      catchError(error => of(actions.fetchWeatherFailure(error)))
    )
  )
)

export const weatherEpic = combineEpics(
  fetchWeatherEpic
)

// reducer
export default handleActions({
  [types.FETCH_WEATHER_REQUEST]: (state, { payload }) => ({
    ...state,
    loading: true
  }),
  [types.FETCH_WEATHER_FAILURE]: (state, { payload }) => ({
    ...state,
    loading: false,
    error: payload
  }),
  [types.FETCH_WEATHER_SUCCESS]: (state, { payload }) => ({
    ...state,
    loading: false,
    data: payload
  })
}, INIT_STATE)

// selector
export const getData = ({ data }) => data
export const getLoading = ({ loading }) => loading
export const getError = ({ error }) => error

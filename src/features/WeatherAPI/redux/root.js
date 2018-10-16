import { combineEpics } from 'redux-observable'
import { combineReducers } from 'redux'

import weather, { weatherEpic } from './weather'

export const rootEpic = combineEpics(
  weatherEpic
)

export const rootReducer = combineReducers({
  weather
})

import { combineReducers } from 'redux'
import forecast from './forecast'
import isLoading from './isLoading'
import hasError from './hasError'

export default combineReducers({forecast, isLoading, hasError})
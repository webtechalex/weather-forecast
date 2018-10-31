import { FETCH_FORECAST_SUCCESS } from '../../actions'

const forecast = (state = null, action) => {
  if (action && action.type === FETCH_FORECAST_SUCCESS) {
    return action.payload
  }
  return state
}

export default forecast
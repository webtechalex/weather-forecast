import { FETCH_FORECAST_SUCCESS } from '../../actions'

const forecast = (state = [], action) => action && action.type === FETCH_FORECAST_SUCCESS ? action.payload : state

export default forecast
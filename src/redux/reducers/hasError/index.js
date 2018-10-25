import { FETCH_FORECAST_ERROR } from '../../actions'

const hasError = (state = false, action) => action && action.type === FETCH_FORECAST_ERROR ? action.payload : state

export default hasError
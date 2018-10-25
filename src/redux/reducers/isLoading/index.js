import { FETCH_FORECAST_LOADING } from '../../actions'

const isLoading = (state = false, action) => action && action.type === FETCH_FORECAST_LOADING ? action.payload : state

export default isLoading
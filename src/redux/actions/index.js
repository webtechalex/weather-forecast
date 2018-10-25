export const FETCH_FORECAST_LOADING = 'FETCH_FORECAST_LOADING'
export const FETCH_FORECAST_ERROR = 'FETCH_FORECAST_ERROR'
export const FETCH_FORECAST_SUCCESS = 'FETCH_FORECAST_SUCCESS'

export const fetchForecastLoading = (isLoading) => ({ type: FETCH_FORECAST_LOADING, payload: isLoading || false })

export const fetchForecastError = (hasError) => ({ type: FETCH_FORECAST_ERROR, payload: hasError || false })

export const fetchForecastSuccess = (payload) => ({ type: FETCH_FORECAST_SUCCESS, payload })

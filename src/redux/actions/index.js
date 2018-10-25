export const FETCH_FORECAST_LOADING = 'FETCH_FORECAST_LOADING'

export const fetchForecastLoading = (isLoading) => ({ type: FETCH_FORECAST_LOADING, payload: isLoading || false })

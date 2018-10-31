import { get } from 'axios'

export const FETCH_FORECAST_LOADING = 'FETCH_FORECAST_LOADING'
export const FETCH_FORECAST_ERROR = 'FETCH_FORECAST_ERROR'
export const FETCH_FORECAST_SUCCESS = 'FETCH_FORECAST_SUCCESS'

export const fetchForecastLoading = (isLoading) => ({ type: FETCH_FORECAST_LOADING, payload: isLoading || false })

export const fetchForecastError = (hasError) => ({ type: FETCH_FORECAST_ERROR, payload: hasError || false })

export const fetchForecastSuccess = (payload) => ({ type: FETCH_FORECAST_SUCCESS, payload })

export const fetchForecast = (query) => dispatch => {
  dispatch(fetchForecastError())
  dispatch(fetchForecastLoading(true))
  let forecastURL = 'http://api.openweathermap.org/data/2.5/forecast'
  let queryString = query
    ? `${forecastURL}?q=${query.replace(/\s/g, '')}&APPID=${process.env.API_KEY}`
    : `${forecastURL}?id=2643743&APPID=${process.env.API_KEY}`
  get(queryString)
    .then(response => {
      dispatch(fetchForecastLoading())
      dispatch(fetchForecastSuccess(response.data))
    })
    .catch(error => {
      dispatch(fetchForecastError(true))
    })
}
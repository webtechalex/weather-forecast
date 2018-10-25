import { FETCH_FORECAST_LOADING, FETCH_FORECAST_ERROR, FETCH_FORECAST_SUCCESS } from './'
import { fetchForecastLoading, fetchForecastError, fetchForecastSuccess } from './'

describe('fetchForecastLoading', () => {
  describe('given no argument', () => {
    it('returns a FETCH_FORECAST_LOADING action with payload of boolean "false"', () => {
      const action = fetchForecastLoading()
      expect(action.type).toBe(FETCH_FORECAST_LOADING)
      expect(action.payload).toBe(false)
    })
  })
  describe('given a boolean "true" argument', () => {
    it('returns a FETCH_FORECAST_LOADING action with payload of boolean "true"', () => {
      const action = fetchForecastLoading(true)
      expect(action.type).toBe(FETCH_FORECAST_LOADING)
      expect(action.payload).toBe(true)
    })
  })
  describe('given a boolean "false" argument', () => {
    it('returns a FETCH_FORECAST_LOADING action with payload of boolean "false"', () => {
      const action = fetchForecastLoading(false)
      expect(action.type).toBe(FETCH_FORECAST_LOADING)
      expect(action.payload).toBe(false)
    })
  })
})

describe('fetchForecastError', () => {
  describe('given no argument', () => {
    it('returns a FETCH_FORECAST_ERROR action with payload of boolean "false"', () => {
      const action = fetchForecastError()
      expect(action.type).toBe(FETCH_FORECAST_ERROR)
      expect(action.payload).toBe(false)
    })
  })
  describe('given a boolean "true" argument', () => {
    it('returns a FETCH_FORECAST_ERROR action with payload of boolean "true"', () => {
      const action = fetchForecastError(true)
      expect(action.type).toBe(FETCH_FORECAST_ERROR)
      expect(action.payload).toBe(true)
    })
  })
  describe('given a boolean "false" argument', () => {
    it('returns a FETCH_FORECAST_ERROR action with payload of boolean "false"', () => {
      const action = fetchForecastError(false)
      expect(action.type).toBe(FETCH_FORECAST_ERROR)
      expect(action.payload).toBe(false)
    })
  })
})

describe('fetchForecastSuccess', () => {
  it('returns a FETCH_FORECAST_SUCCESS action containing the passed payload', () => {
    const payload = []
    const action = fetchForecastSuccess(payload)
    expect(action.type).toBe(FETCH_FORECAST_SUCCESS)
    expect(action.payload).toBe(payload)
  })
})
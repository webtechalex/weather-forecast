import { FETCH_FORECAST_LOADING } from './'
import { fetchForecastLoading } from './'

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
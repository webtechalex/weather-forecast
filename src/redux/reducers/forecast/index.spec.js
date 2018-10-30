import forecast from './'

describe('forecast', () => {
  describe('given no arguments', () => {
    it('returns the default, empty array, state', () => {
      expect(forecast()).toEqual(null)
    })
  })
  describe('given a FETCH_FORECAST_SUCCESS action', () => {
    it('returns the action payload', () => {
      const payload = { list: ['dummy payload'] }
      const action = { type: 'FETCH_FORECAST_SUCCESS', payload }
      expect(forecast(null, action)).toBe(payload)
    })
  })
})
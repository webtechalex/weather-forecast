import isLoading from './'

describe('isLoading', () => {
  describe('given no arguments', () => {
    it('returns the default state of boolean "false"', () => {
      expect(isLoading()).toBe(false)
    })
  })
  describe('given a FETCH_FORECAST_LOADING action', () => {
    it('returns the action payload', () => {
      const falseAction = { type: 'FETCH_FORECAST_LOADING', payload: false }
      const trueAction = { type: 'FETCH_FORECAST_LOADING', payload: true }
      expect(isLoading(false, falseAction)).toBe(false)
      expect(isLoading(false, trueAction)).toBe(true)
    })
  })
})
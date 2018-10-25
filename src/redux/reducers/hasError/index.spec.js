import hasError from './'

describe('hasError', () => {
  describe('given no arguments', () => {
    it('returns the default state of boolean "false"', () => {
      expect(hasError()).toBe(false)
    })
  })
  describe('given an FETCH_FORECAST_ERROR action', () => {
    it('returns the action payload', () => {
      const falseAction = { type: 'FETCH_FORECAST_ERROR', payload: false }
      const trueAction = { type: 'FETCH_FORECAST_ERROR', payload: true }
      expect(hasError(false, falseAction)).toBe(false)
      expect(hasError(false, trueAction)).toBe(true)
    })
  })
})
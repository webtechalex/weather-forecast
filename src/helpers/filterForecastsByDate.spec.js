import filterForecastsByDate from './filterForecastsByDate'

import transformedResponse from '../../mocks/transformedResponse'
import filteredResponse from '../../mocks/filteredResponse'

describe('filterForecastsByDate', () => {
  describe('given a date and a list of forecasts', () => {
    it('returns all of the forecasts on the given date', () => {
      expect(filterForecastsByDate('2018-10-26', transformedResponse)).toEqual(filteredResponse)
    })
  })
})
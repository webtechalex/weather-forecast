import selectForecastDates from './selectForecastDates'

import apiResponse from '../../mocks/apiResponse'
import transformedDates from '../../mocks/transformedDates'

describe('selectForecastDates', () => {
  it('gets the list of dates from all forecasts', () => {
    expect(selectForecastDates(apiResponse)).toEqual(transformedDates)
  })
})
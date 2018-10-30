import selectForecastData from './selectForecastData'

import apiResponse from '../../mocks/apiResponse'
import transformedResponse from '../../mocks/transformedResponse'

describe('selectForecastData', () => {
  it('gets the times and temperatures from each data point', () => {
    expect(selectForecastData(apiResponse)).toEqual(transformedResponse)
  })
})
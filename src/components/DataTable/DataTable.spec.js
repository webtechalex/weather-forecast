import React from 'react'
import { shallow } from 'enzyme'

import DataTable from './DataTable'
import DataRow from '../DataRow/DataRow'
import transformedResponse from '../../../mocks/transformedResponse'
import transformedDates from '../../../mocks/transformedDates'


describe('DataTable', () => {
  it('renders a DataRow for each item in forecastData props', () => {
    const wrapper = shallow(<DataTable dates={transformedDates} forecastData={transformedResponse} />)
    expect(wrapper.find(DataRow).length).toBe(transformedDates.length)
  })
})
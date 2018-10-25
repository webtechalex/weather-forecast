import React from 'react'
import { shallow } from 'enzyme'

import DataTable from './DataTable'
import DataRow from '../DataRow/DataRow'
import forecastData from '../../../mocks/forecastData'


describe('DataTable', () => {
  it('renders a DataRow for each item in forecastData props', () => {
    const wrapper = shallow(<DataTable forecastData={forecastData} />)
    expect(wrapper.find(DataRow).length).toBe(forecastData.length)
  })
})
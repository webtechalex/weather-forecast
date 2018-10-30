import React from 'react'
import { shallow } from 'enzyme'

import DataRow from './DataRow'
import filteredResponse from '../../../mocks/filteredResponse'

describe('DataRow', () => {
  const wrapper = shallow(<DataRow date={'2018-10-26'} forecasts={filteredResponse} />)
  it('renders a tr tag', () => {
    expect(wrapper.find('tr').exists()).toBe(true)
  })
  it('renders a td tag with the correct day according to the day number prop', () => {
    expect(wrapper.find('td').first().text()).toBe('Friday')
  })
  it('renders a td tag for every forecast in forecast props', () => {
    expect(wrapper.find('td').length).toBe(filteredResponse.length + 1)
  })
})
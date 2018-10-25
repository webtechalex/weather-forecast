import React from 'react'
import { shallow } from 'enzyme'

import DataRow from './DataRow'

describe('DataRow', () => {
  const forecasts = [{time: 1, temp: 294}, {time: 2, temp: 285}]
  const wrapper = shallow(<DataRow day={0} forecasts={forecasts} />)
  it('renders a tr tag', () => {
    expect(wrapper.find('tr').exists()).toBe(true)
  })
  it('renders a td tag with the correct day according to the day number prop', () => {
    expect(wrapper.find('td').first().text()).toBe('Sunday')
  })
  it('renders a td tag for every forecast in forecast props', () => {
    expect(wrapper.find('td').length).toBe(forecasts.length + 1)
  })
})
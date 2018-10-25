import React from 'react'
import { shallow } from 'enzyme'

import Error from './Error'

describe('Error', () => {
  it('renders null when isLoading prop is false', () => {
    const wrapper = shallow(<Error hasError={false} />)
    const instance = wrapper.instance()
    expect(instance).toBe(null)
  })
  it('renders a p tag when isLoading prop is true', () => {
    const wrapper = shallow(<Error hasError={true} />)
    expect(wrapper.find('p').text()).toBe('There was an error getting the data')
  })
})
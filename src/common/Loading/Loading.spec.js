import React from 'react'
import { shallow } from 'enzyme'

import Loading from './Loading'

describe('Loading', () => {
  it('renders null when isLoading prop is false', () => {
    const wrapper = shallow(<Loading isLoading={false} />)
    const instance = wrapper.instance()
    expect(instance).toBe(null)
  })
  it('renders a p tag when isLoading prop is true', () => {
    const wrapper = shallow(<Loading isLoading={true} />)
    expect(wrapper.find('p').text()).toBe('Loading...')
  })
})
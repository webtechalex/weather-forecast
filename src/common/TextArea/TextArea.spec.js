import React from 'react'
import { shallow } from 'enzyme'

import TextArea from './TextArea'

describe('TextArea', () => {
  const changeHandler = jest.fn()
  const wrapper = shallow(<TextArea label='CSV File' value='' handleChange={changeHandler} />)

  it('renders a textarea', () => {
    expect(wrapper.find('textarea').exists()).toBe(true)
  })
  it('renders a label element', () => {
    expect(wrapper.find('label').exists()).toBe(true)
  })
  it('passes the value prop to input element', () => {
    expect(wrapper.find('textarea').props().value).toBe('')
  })
  it('passes the handleChange prop to input element', () => {
    expect(wrapper.find('textarea').props().onChange).toBe(changeHandler)
  })
  it('passes the value prop to input element', () => {
    expect(wrapper.find('label').text()).toBe('CSV File')
  })
})
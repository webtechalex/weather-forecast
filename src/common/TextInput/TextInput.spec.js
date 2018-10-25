import React from 'react'
import { shallow } from 'enzyme'

import TextInput from './TextInput'

describe('TextInput', () => {
  const changeHandler = jest.fn()
  const wrapper = shallow(<TextInput label='City' value='' handleChange={changeHandler} />)

  it('renders an input field', () => {
    expect(wrapper.find('input').exists()).toBe(true)
  })
  it('renders a label element', () => {
    expect(wrapper.find('label').exists()).toBe(true)
  })
  it('passes the value prop to input element', () => {
    expect(wrapper.find('input').props().value).toBe('')
  })
  it('passes the handleChange prop to input element', () => {
    expect(wrapper.find('input').props().onChange).toBe(changeHandler)
  })
  it('passes the label prop to the label element', () => {
    expect(wrapper.find('label').text()).toBe('City')
  })
})
import React from 'react'
import { shallow } from 'enzyme'

import ToggleInput from './ToggleInput'

describe('ToggleInput', () => {
  const changeHandler = jest.fn()
  const wrapper = shallow(<ToggleInput options={[{ label: 'Paste CSV File', value: 'csv' }, { label: 'City', value: 'city' }]} value='csv' handleChange={changeHandler} />)

  it('renders exactly <<options.length>> inputs', () => {
    expect(wrapper.find('input').length).toBe(2)
  })
  it('renders exactly <<options.length>> label elements', () => {
    expect(wrapper.find('label').length).toBe(2)
  })
  it('passes the value option prop to input element', () => {
    expect(wrapper.find('input').first().props().value).toBe('csv')
    expect(wrapper.find('input').last().props().value).toBe('city')
  })
  it('passes the handleChange prop to input element', () => {
    expect(wrapper.find('input').first().props().onChange).toBe(changeHandler)
    expect(wrapper.find('input').last().props().onChange).toBe(changeHandler)
  })
})
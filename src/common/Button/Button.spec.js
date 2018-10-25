import React from 'react'
import { shallow } from 'enzyme'

import Button from './Button'

describe('Button', () => {
  const clickHandler = jest.fn()
  const wrapper = shallow(<Button label='Submit' handleClick={clickHandler} />)

  it('renders an input field', () => {
    expect(wrapper.find('button').exists()).toBe(true)
  })
  it('passes the label prop to button element text node', () => {
    expect(wrapper.find('button').text()).toBe('Submit')
  })
  it('passes the handleClick prop to input element', () => {
    expect(wrapper.find('button').props().onClick).toBe(clickHandler)
  })
})
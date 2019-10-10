/* eslint-disable no-undef */
import React from 'react'
import { shallow } from 'enzyme'
import Button from './Button'

describe('Test button value', () => {
  const value = '2'
  test('Click button from shallow', () => {
    const button = shallow(<Button text={value} btnValue={value} />)
    expect(button.find('div').find('p').text()).toEqual(value)
  })
})

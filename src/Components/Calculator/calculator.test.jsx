/* eslint-disable no-undef */
import React from 'react'
import { shallow } from 'enzyme'
import Calculator from './Calculator'

describe('Test calculator numeric buttons and display', () => {
  test('Click calculator button from shallow', () => {
    const calc = shallow(<Calculator />)
    const button = calc.childAt(0).childAt(5).dive()
    button.simulate('click')
    const display = calc.childAt(0).childAt(0).dive()

    expect(display.text()).toBe('7')
  })

  test('Simulate HandleClick from calculator instance', () => {
    const calc = shallow(<Calculator />)
    calc.instance().handleClick('9', 'number')
    const display = calc.childAt(0).childAt(0).dive()

    expect(display.text()).toBe('9')
  })

  test('Click three calculator buttons from shallow', () => {
    const calc = shallow(<Calculator />)

    // Get 9,4 and 5 buttons
    const button1 = calc.childAt(0).childAt(7).dive()
    const button2 = calc.childAt(0).childAt(9).dive()
    const button3 = calc.childAt(0).childAt(10).dive()

    // Click those 3 buttons, in order
    button1.simulate('click')
    button2.simulate('click')
    button3.simulate('click')

    // Get the display at the current moment
    const display = calc.childAt(0).childAt(0).dive()

    // Expect result
    expect(display.text()).toBe('945')
  })
})

describe('Test calculator operations', () => {
  test('Add two numbers', () => {
    const calc = shallow(<Calculator />)

    // Get 7, +, 8, = buttons
    const button1 = calc.childAt(0).childAt(5).dive()
    const button2 = calc.childAt(0).childAt(6).dive()
    const sumBtn = calc.childAt(0).childAt(16).dive()
    const equalsBtn = calc.childAt(0).childAt(19).dive()

    // Simulate click on buttons
    button1.simulate('click')
    sumBtn.simulate('click')
    button2.simulate('click')
    equalsBtn.simulate('click')

    // Get display at the current moment
    const display = calc.childAt(0).childAt(0).dive()

    // Expect result
    expect(display.text()).toBe('15')
  })

  test('Multiply two numbers', () => {
    const calc = shallow(<Calculator />)

    // Get 7, *, 8, = buttons
    const button1 = calc.childAt(0).childAt(5).dive()
    const button2 = calc.childAt(0).childAt(6).dive()
    const mulBtn = calc.childAt(0).childAt(8).dive()
    const equalsBtn = calc.childAt(0).childAt(19).dive()

    // Simulate click on buttons
    button1.simulate('click')
    mulBtn.simulate('click')
    button2.simulate('click')
    equalsBtn.simulate('click')

    // Get display at the current moment
    const display = calc.childAt(0).childAt(0).dive()

    // Expect result
    expect(display.text()).toBe('56')
  })
})

describe('Test multiple substractions', () => {
  test('Substract multiple numbers without pressing equals button', () => {
    const calc = shallow(<Calculator />)

    // Get 1, 0, 5, - buttons
    const button0 = calc.childAt(0).childAt(17).dive()
    const button1 = calc.childAt(0).childAt(13).dive()
    const button5 = calc.childAt(0).childAt(10).dive()
    const subBtn = calc.childAt(0).childAt(12).dive()

    // Simulate click on buttons in order to do: 100 - 5 - 5 -
    button1.simulate('click')
    button0.simulate('click')
    button0.simulate('click')
    subBtn.simulate('click')
    button5.simulate('click')
    subBtn.simulate('click')
    button5.simulate('click')
    subBtn.simulate('click')

    // Get display at the current moment
    const display = calc.childAt(0).childAt(0).dive()

    // Expect result
    expect(display.text()).toBe('90')
  })
})

describe('Test Clear button (C) on display', () => {
  test('Clear display without doing any operation', () => {
    const calc = shallow(<Calculator />)

    // Get 1, 0, c buttons
    const button0 = calc.childAt(0).childAt(17).dive()
    const button1 = calc.childAt(0).childAt(13).dive()
    const clearBtn = calc.childAt(0).childAt(1).dive()

    // Simulate click on buttons in order to do: 100 - 5 - 5 -
    button1.simulate('click')
    button0.simulate('click')
    button0.simulate('click')
    button1.simulate('click')
    button0.simulate('click')
    button0.simulate('click')
    clearBtn.simulate('click')

    // Get display at the current moment
    const display = calc.childAt(0).childAt(0).dive()

    // Expect result
    expect(display.text()).toBe('0')
  })
})

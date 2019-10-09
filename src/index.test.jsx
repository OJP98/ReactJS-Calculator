/* eslint-disable no-undef */
const operations = require('./operations/index')

describe('General calculator operations', () => {
  test('Should add two numbers', () => {
    const number1 = 2
    const number2 = 3

    expect(operations.sum(number1, number2)).toEqual(5)
  })

  test('Should substract two numbers', () => {
    const number1 = 10
    const number2 = 8

    expect(operations.sub(number1, number2)).toEqual(2)
  })

  test('Should divide two numbers', () => {
    const number1 = 6
    const number2 = 3

    expect(operations.divide(number1, number2)).toEqual(2)
  })

  test('Should multiply two numbers', () => {
    const number1 = 10
    const number2 = 8

    expect(operations.multiply(number1, number2)).toEqual(80)
  })
})

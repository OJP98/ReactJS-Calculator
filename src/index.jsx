// DESACTIVAR LA PRIMERA LINEA DE COMENTARIO AL TERMIANR
/* eslint-disable react/no-unused-state */
/* eslint-disable no-restricted-globals */
/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './main.css'
import Button from './Components/Button/Button'
import Display from './Components/Display/Display'

const operations = require('./operations/index')

class App extends Component {
  constructor() {
    super()

    this.state = {
      result: '0',
      firstNumber: '',
      secondNumber: '',
      operator: '',
    }
  }

  handleClick = (btnValue, btnType) => {
    const {
      result, firstNumber, operator,
    } = this.state

    let isNumber = !isNaN(parseInt(btnValue, 10))
    if (btnValue === '.') { isNumber = true }

    let isOperator = false
    if (btnType.includes('operation')) { isOperator = true }

    if (isNumber) {
      if (result === '0') {
        this.setState({
          result: btnValue,
        })
      } else if (firstNumber !== '' && result === firstNumber) {
        this.setState({
          result: btnValue,
        })
      } else {
        this.setState({
          result: result + btnValue,
        })
      }
    } else if (isOperator) {
      if (firstNumber === '') {
        this.setState({
          firstNumber: result,
          operator: btnValue,
        })
      } else if (firstNumber !== '' && result === firstNumber) {
        this.setState({
          operator: btnValue,
        })
      } else if (firstNumber !== '' && result !== firstNumber) {
        this.calculate(firstNumber, result, operator)
      }
    } else if (btnValue === 'C') {
      this.reset()
    } else if (btnValue === '=' && firstNumber !== '') {
      this.calculate(firstNumber, result, operator)
      this.setState({
        firstNumber: '',
      })
    }
  }

  reset() {
    this.setState({
      result: '0',
      firstNumber: '',
      secondNumber: '',
      operator: '',
    })
  }

  calculate(firstNumber, secondNumber, operator) {
    const n1 = parseFloat(firstNumber, 10)
    const n2 = parseFloat(secondNumber, 10)
    let resultado = 0

    if (operator === 'sum') {
      resultado = operations.sum(n1, n2)
    } else if (operator === 'sub') {
      resultado = operations.sub(n1, n2)
    } else if (operator === 'div') {
      resultado = operations.divide(n1, n2)
    } else if (operator === 'mul') {
      resultado = operations.multiply(n1, n2)
    } else if (operator === 'mod') {
      resultado = operations.mod(n1, n2)
    } else {
      resultado = n1
    }

    if (resultado % 1 !== 0) { resultado = resultado.toFixed(2) }

    console.log(n1, operator, n2, resultado)

    this.setState({
      result: resultado,
      firstNumber: resultado,
      secondNumber: '',
    })
    // try {
    //   this.setState({

    //     result: (eval(this.state.result) || "") + "",
    //   })
    // } catch (e) {
    //   this.setState({
    //     result: 'error'
    //   })

    // }
  }

  render() {
    const { result } = this.state
    return (
      <div className="calculator">
        <div className="buttonsGrid">
          <Display result={result} />
          <Button onClick={this.handleClick} text="C" type="button symbol" btnValue="C" />
          <Button onClick={this.handleClick} text="&#8314;&#8725;&#8331;" type="button symbol" btnValue="switch" />
          <Button onClick={this.handleClick} text="%" type="button operation symbol" btnValue="mod" />
          <Button onClick={this.handleClick} text="÷" type="button operation" btnValue="div" />
          <Button onClick={this.handleClick} text="7" type="button number" btnValue="7" />
          <Button onClick={this.handleClick} text="8" type="button number" btnValue="8" />
          <Button onClick={this.handleClick} text="9" type="button number" btnValue="9" />
          <Button onClick={this.handleClick} text="×" type="button operation" btnValue="mul" />
          <Button onClick={this.handleClick} text="4" type="button number" btnValue="4" />
          <Button onClick={this.handleClick} text="5" type="button number" btnValue="5" />
          <Button onClick={this.handleClick} text="6" type="button number" btnValue="6" />
          <Button onClick={this.handleClick} text="-" type="button operation" btnValue="sub" />
          <Button onClick={this.handleClick} text="1" type="button number" btnValue="1" />
          <Button onClick={this.handleClick} text="2" type="button number" btnValue="2" />
          <Button onClick={this.handleClick} text="3" type="button number" btnValue="3" />
          <Button onClick={this.handleClick} text="+" type="button operation" btnValue="sum" />
          <Button onClick={this.handleClick} text="0" type="button number double" btnValue="0" />
          <Button onClick={this.handleClick} text="." type="button number" btnValue="." />
          <Button onClick={this.handleClick} text="=" type="button equals" btnValue="=" />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#root'))

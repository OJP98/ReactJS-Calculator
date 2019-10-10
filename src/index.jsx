// DESACTIVAR LA PRIMERA LINEA DE COMENTARIO AL TERMIANR
/* eslint-disable react/no-unused-state */
/* eslint-disable no-restricted-globals */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import ReactDOM from 'react-dom'
import './main.css'
import Calculator from './Components/Calculator/Calculator'

function App() {
  return (
    <Calculator />
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))

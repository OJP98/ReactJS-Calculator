/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import ReactDOM from 'react-dom'
import './main.css'
import Button from './Components/Button/Button'

const App = () => (
  <div className="calculator">
    <div className="buttonsGrid">
      <Button type="display" btnValue="0" />
      <Button type="button symbol" btnValue="C" />
      <Button type="button symbol" btnValue="&#8314;&#8725;&#8331;" />
      <Button type="button symbol" btnValue="%" />
      <Button type="button symbol" btnValue="÷" />
      <Button type="button number" btnValue="7" />
      <Button type="button number" btnValue="8" />
      <Button type="button number" btnValue="9" />
      <Button type="button operation" btnValue="×" />
      <Button type="button number" btnValue="4" />
      <Button type="button number" btnValue="5" />
      <Button type="button number" btnValue="6" />
      <Button type="button operation" btnValue="-" />
      <Button type="button number" btnValue="1" />
      <Button type="button number" btnValue="2" />
      <Button type="button number" btnValue="3" />
      <Button type="button operation" btnValue="+" />
      <Button type="button number double" btnValue="0" />
      <Button type="button number" btnValue="." />
      <Button type="button equals" btnValue="=" />
    </div>
  </div>

)

ReactDOM.render(<App />, document.querySelector('#root'))

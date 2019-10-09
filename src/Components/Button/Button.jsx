/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from 'react'

export default class Button extends Component {
  setValue() {
    const { onClick, btnValue, type } = this.props
    onClick(btnValue, type)
  }

  render() {
    const { text, type } = this.props

    return (
      <div className={type} role="button" tabIndex={0} onClick={() => { this.setValue() }} onKeyPress={this.handleKeyPress}>
        <p>
          {text}
        </p>
      </div>
    )
  }
}

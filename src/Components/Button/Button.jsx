/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from 'react'

// eslint-disable-next-line react/prefer-stateless-function
export default class Button extends Component {
  render() {
    const { btnValue, type } = this.props
    return (
      <div className={type}>
        <p>
          {btnValue}
        </p>
      </div>
    )
  }
}

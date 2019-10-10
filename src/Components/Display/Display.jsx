/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from 'react'

// eslint-disable-next-line react/prefer-stateless-function
export default class Display extends Component {
  render() {
    let { result } = this.props

    if (result.length > 9) result = result.slice(0, 9)

    return (
      <div className="display">
        <p>
          { result }
        </p>
      </div>
    )
  }
}

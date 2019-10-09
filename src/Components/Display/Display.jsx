/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from 'react'

// eslint-disable-next-line react/prefer-stateless-function
export default class Display extends Component {
  render() {
    const { result } = this.props
    return (
      <div className="display">
        <p>
          { result }
        </p>
      </div>
    )
  }
}

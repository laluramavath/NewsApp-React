import React, { Component } from 'react'
import loading from './spinner.svg'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loading} alt='loading' style={{height: '50px',width: 'auto'}}/>
      </div>
    )
  }
}

export default Spinner

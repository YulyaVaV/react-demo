import React from 'react';
import './style.scss'

export const Input = ( {label} ) => {
  return (
  <>
    <label className='label_name'>
      {label}
      <input
        className='input'
        type="text"
        required
      />
    </label>
  </>
  )
}

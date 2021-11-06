import React from 'react';
import './pay.scss';
import './data.scss'

export const Pay = ( { img, text, active } ) => {
  return (
    <button
      disabled
      className={`pay_btn ${active ? 'pay_btn-active' : ''}`}
    >
      <img
        alt='/'
        src={img}
        className='pay_img' />
      <p className='pay_text'>{text}</p>
    </button>
  )
}

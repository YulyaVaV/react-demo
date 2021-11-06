import React from 'react';
import './service.scss'

export const Service = ( { url, text, active, able } ) => {
  return (
  <div className="service">
    <button
      className={`service_btn ${active ? 'service_btn-active' : 'service_btn-disabled' }`}>
      <img
        alt='/'
        src={url}
        className="service_img"
      />
    </button>
    <p 
      className={`service_text ${able ? 'service_text-able' : '' }`}
    >
    {text}
    </p>
  </div>
  )
}

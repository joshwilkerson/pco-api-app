import React from 'react'

const Symbol = ( props ) => (
  <svg className={`symbol ${props.className}`}>
    <use xlinkHref={`#icon-${props.icon}`} />
  </svg>
)

export default Symbol

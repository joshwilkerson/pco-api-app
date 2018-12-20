import React from 'react'

const Symbol = ({icon}) => (
  <svg className="symbol">
    <use xlinkHref={`#icon-${icon}`} />
  </svg>
)

export default Symbol

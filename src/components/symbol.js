import React from 'react'

const Symbol = ({icon}) => (
  <svg className="symbol">
    <use xlinkHref={`../../static/icons.svg#icon-${icon}`} />
  </svg>
)

export default Symbol

import React from 'react'
import Symbol from './symbol'

const Buttons = () => (
  <div className="buttons-demo">
    <div className="d-b w-100% mb-4">
      <button className="btn">btn</button>
      <button className="btn btn--outline">btn.btn--outline</button>
      <button className="btn btn--secondary">btn.btn--secondary</button>
      <button className="btn btn--secondary btn--outline">btn.btn--secondary.btn--outline</button>
      <button className="btn btn--danger">btn.btn--danger</button>
      <button className="btn btn--danger btn--outline">btn.btn--danger.btn--outline</button>
    </div>

    <div className="d-b w-100% mb-4">
      <h2>btn.btn--sm</h2>
      <button className="btn btn--sm">btn</button>
      <button className="btn btn--outline btn--sm">btn.btn--outline</button>
      <button className="btn btn--secondary btn--sm">btn.btn--secondary</button>
      <button className="btn btn--secondary btn--outline btn--sm">btn.btn--secondary.btn--outline</button>
      <button className="btn btn--danger btn--sm">btn.btn--danger</button>
      <button className="btn btn--danger btn--outline btn--sm">btn.btn--danger.btn--outline</button>
    </div>

    <div className="d-b w-100% mb-4">
      <h2>btn w/ icon</h2>
      <button className="btn"><Symbol icon="pencil" /> btn</button>
      <button className="btn btn--outline"><Symbol icon="chevron-down" /> btn.btn--outline</button>
      <button className="btn btn--secondary"><Symbol icon="compass" /> btn.btn--secondary</button>
      <button className="btn btn--secondary btn--outline"><Symbol icon="github" /> btn.btn--secondary.btn--outline</button>
      <button className="btn btn--danger"><Symbol icon="trash" /> btn.btn--danger</button>
      <button className="btn btn--danger btn--outline"><Symbol icon="terminal" /> btn.btn--danger.btn--outline</button>
    </div>
  </div>
)

export default Buttons

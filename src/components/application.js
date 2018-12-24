import React from 'react'
import Symbol from './symbol'


export const Application = () => (
  <div className="pane">
    <div className="d-f fd-c fd-r@lg jc-sb mb-3">
      <div className="p-0 pr-1@lg">
        <h2 className="mb-2p">PCO Test Application</h2>
        <p className="mb-2p">A brief description of the application goes here.</p>
        <a href="http://planning.center" className="mb-0">planning.center</a>
      </div>

      <div className="mt-2 mt-0@lg">
        <button className="btn btn--outline btn--sm mr-1">
          <Symbol icon="pencil" />Edit
        </button>
        <button className="btn btn--outline btn--danger btn--sm">
          <Symbol icon="trash" />Delete
        </button>
      </div>
    </div>

    <div className="pane--columns">
      <div className="column">
        <label>Client ID:</label>
        <input type="text" readOnly value="2001982910349584902ab39280sbsaqoi182904bn029k0ax9bhlix0919102556a" />

        <label>Secret:</label>
        <input type="text" readOnly value="389ba20g3211046973bx920592z3920bm221959603a2948fg5910f9129340a2" />

        <label>Callback URLs:</label>
        <textarea>
          http://www.planning.center/test
          https://www.planningcenteronline.com/callback
          http://localhost:8000/testing
        </textarea>
      </div>

      <div className="column">
        <label>Versions:</label>
        <div className="content-well">
          <ul>
            <li><strong>Check Ins:</strong> 2018-08-01</li>
            <li><strong>Giving:</strong> 2018-08-01</li>
            <li><strong>People:</strong> 2018-08-01</li>
            <li><strong>Resources:</strong> 2018-08-01</li>
            <li><strong>Services:</strong> 2018-08-01</li>
          </ul>
        </div>
        <p>Questions about API versions? Check out <a href="https://developer.planning.center/docs">our documentation</a>.</p>
      </div>
    </div>
  </div>
)


export const ApplicationNew = () => (
  <div className="pane">
    <div className="w-100% d-b">
      <h2>Register New Application</h2>
      <label>Application name:</label>
      <input type="text" />

      <label>Application description:</label>
      <input type="text" />

      <label>URL:</label>
      <input type="text" />
    </div>

    <div className="pane--columns">
      <div className="column">
        <label>Client ID:</label>
        <input type="text" />

        <label>Secret:</label>
        <input type="text" />
      </div>

      <div className="column">
        <label>Callback URLs:</label>
        <textarea />
      </div>
    </div>

    <div className="w-100% d-b">
      <h3 className="mb-4p">Versions</h3>
      <p className="mb-1">Planning Center API supports versioning on a per-application basis. Use this section to manage the default version of all Planning Center Apps. <a href="http://developer.planning.center/docs">More details</a></p>
    </div>

    <div className="pane--columns">
      <div className="column">
        <label>Check-Ins:</label>
        <div className="select">
          <select>
            <option>2018-08-01</option>
          </select>
        </div>

        <label>People:</label>
        <div className="select">
          <select>
            <option>2018-08-01</option>
          </select>
        </div>

        <label>Services:</label>
        <div className="select">
          <select>
            <option>2018-08-01</option>
          </select>
        </div>
      </div>

      <div className="column">
        <label>Giving:</label>
        <div className="select">
          <select>
            <option>2018-08-01</option>
          </select>
        </div>

        <label>Resources:</label>
        <div className="select">
          <select>
            <option>2018-08-01</option>
          </select>
        </div>
      </div>
    </div>

    <div className="d-b w-100% mt-2">
    <button className="btn mr-1">Save</button>
    <button className="btn btn--secondary mr-1">Cancel</button>
    </div>
  </div>
)


export const ApplicationBlank = () => (
  <div className="pane">
    <div className="d-f ai-c jc-c fd-c p-4">
      <Symbol icon="terminal" className="blank-state-icon pt-2" />
      <p className="py-2">You have no applications.</p>
      <button className="btn btn--outline">Register one now</button>
    </div>
  </div>
)

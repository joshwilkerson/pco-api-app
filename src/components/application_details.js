import React from 'react'
import Symbol from './symbol'


const ApplicationDetails = () => (
  <div className="app-details">
    <div className="app-details--header">
      <div>
        <h2>PCO Test Application</h2>
        <p>A brief description of the application goes here.</p>
        <a href="http://planning.center">planning.center</a>
      </div>

      <div className="mt-2 mt-4p@xl">
        <button className="btn btn--outline btn--sm mr-1">
          <Symbol icon="pencil" />Edit
        </button>
        <button className="btn btn--outline btn--danger btn--sm">
          <Symbol icon="trash" />Delete
        </button>
      </div>
    </div>

    <div className="app-details--data">
      <div className="column">
        <label>Client ID:</label>
        <input type="text" readOnly value="2001982910349584902ab39280sbsaqoi182904bn029k0ax9bhlix0919102556a" />

        <label>Secret:</label>
        <input type="text" readOnly value="389ba20g3211046973bx920592z3920bm221959603a2948fg5910f9129340a2" />

        <label>Callback URLs:</label>
        <div className="content-well">
          <ul>
            <li>http://www.planning.center/test</li>
            <li>https://www.planningcenteronline.com/callback</li>
            <li>http://localhost:8000/testing</li>
          </ul>
        </div>
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

export default ApplicationDetails

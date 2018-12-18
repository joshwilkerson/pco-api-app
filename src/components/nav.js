import React from 'react'
import { Link } from "gatsby";
import Symbol from './symbol'
import logo from '../assets/api-logo.svg'


const Nav = () => (
  <nav>
    <div className="logo">
      <img src={logo} alt="Planning Center API"/>
    </div>

    <ul>
      <li>
        <Link to="/" activeClassName="active">
          <Symbol icon="terminal" />
          Applications
        </Link>
      </li>
      <li>
        <Link to="tokens" activeClassName="active">
          <Symbol icon="key" />
          Access Tokens
        </Link>
      </li>
      <li>
        <Link to="webhooks" activeClassName="active">
          <Symbol icon="webhooks" />
          Webhooks
        </Link>
      </li>
      <li>
        <Link to="explorer" activeClassName="active">
          <Symbol icon="compass" />
          Explorer
        </Link>
      </li>
    </ul>
  </nav>
)

export default Nav

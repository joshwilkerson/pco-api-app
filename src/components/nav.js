import React from 'react'
import { Link } from "gatsby";
import Symbol from './symbol'

const Nav = () => (
  <nav>
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
        <Link to="authorized" activeClassName="active">
          <Symbol icon="shield" />
          Authorized Apps
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

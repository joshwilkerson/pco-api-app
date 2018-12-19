import React from 'react'
import Symbol from './symbol'
import UserSwitcher from './user_switcher'
import logo from '../assets/api-logo.svg'

const Header = () => (
  <header>
    <div className="logo">
      <img src={logo} alt="Planning Center API"/>
    </div>

    <div className="d-if fd-r ai-c pr-3">
      <div className="externalLinks">
        <a href="https://developer.planning.center/docs">
          <Symbol icon="document" />
          Documentation
        </a>
        <a href="https://github.com/planningcenter/developers/issues">
          <Symbol icon="github" />
          Submit Issue
        </a>
      </div>
      <UserSwitcher />
    </div>
  </header>
)

export default Header

import React from 'react'
import Symbol from './symbol'
import UserSwitcher from './user_switcher'

const Header = () => (
  <header>
    <div className="externalLinks">
      <a href="https://developer.planning.center/">
        <Symbol icon="document" />
        Documentation
      </a>
      <a href="https://github.com/planningcenter/developers/issues">
        <Symbol icon="github" />
        Submit Issue
      </a>
    </div>
    <UserSwitcher />
  </header>
)

export default Header

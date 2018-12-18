import React from 'react'
import Symbol from './symbol'

const UserSwitcher = () => (
  <div className="user">
    <div className="user--avatar">
      <img src="http://i.pravatar.cc/150?img=14" alt="user avatar"/>
    </div>
    <div className="user--name">Josh Wilkerson</div>
    <div className="dropdownTrigger">
      <Symbol icon="chevron-down" />
    </div>
  </div>
)

export default UserSwitcher

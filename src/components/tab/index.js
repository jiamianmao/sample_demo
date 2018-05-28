import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './style.less'

class Tab extends Component {
  render() {
    return (
      <div className="tab_box">
        <NavLink activeClassName='active' to='/home'>选妃台</NavLink>
        <NavLink activeClassName='active' to='/tel'>呼叫</NavLink>
        <NavLink activeClassName='active' to='/my'>后宫</NavLink>
      </div>
    )
  }
}

export default Tab

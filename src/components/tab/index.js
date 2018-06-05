import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import './style.less'

class Tab extends Component {
  static contextTypes = {
    user: PropTypes.string
  }

  render() {
    console.log(this.context)
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

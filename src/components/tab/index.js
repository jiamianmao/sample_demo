import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './style.less'

class Tab extends Component {
  render() {
    const ARR = [
      {
        text: '首页',
        path: '/home',
        icon: require('../../assets/home/home.png')
      }, {
        text: '一键呼救',
        path: '/tel',
        icon: require('../../assets/home/help.png')
      }, {
        text: '我的',
        path: '/my',
        icon: require('../../assets/home/my.png')
      }
    ]

    return (
      <div className="tab_box">
        {ARR.map(item => (
          <NavLink activeClassName='active' key={item.text} to={item.path}>
            <img src={item.icon} alt=""/>
            <span>{ item.text }</span>
          </NavLink>
        ))}
      </div>
    )
  }
}

export default Tab

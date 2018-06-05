import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Tab from '@/components/tab'
import PropTypes from 'prop-types'

class MyIndex extends Component {
  static childContextTypes = {
    user: PropTypes.string
  }

  getChildContext() {
    return {
      user: '小菜猫'
    }
  }
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to='/my/order'>我的订单</Link>
          </li>
          <li>
            <Link to='/my/address'>地址管理</Link>
          </li>
          <li>
            <Link to='/my/car'>车辆管理</Link>
          </li>
          <li>
            <Link to='/my/account'>账户管理</Link>
          </li>
          <li>
            <Link to='/my/about'>关于我们</Link>
          </li>
        </ul>
        <Tab />
      </div>
    )
  }
}

export default MyIndex

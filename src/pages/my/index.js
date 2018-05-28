import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Tab from '@/components/tab'

class MyIndex extends Component {
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

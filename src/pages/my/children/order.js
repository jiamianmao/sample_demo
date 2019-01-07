import React, { Component } from 'react'
import { getOrderDesc } from '@/api/my'
import Storage from 'good-storage'
import { ORDERSTATUS } from '@/util/dict'
import './order.less'

class Order extends Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: []
    }
  }

  componentDidMount() {
    let userInfo = Storage.session.get('userInfo')
    userInfo && JSON.parse(userInfo)
    this._getOrderDesc(userInfo.id)
  }

  _getOrderDesc(id) {
    getOrderDesc(id).then(res => {
      this.setState({
        orders: res.payload
      })
    })
  }

  render() {
    const { orders } = this.state
    return (
      <div className='order_box'>
        {orders.map((item, index) => (
          <div className='item' key={index}>
            <div className='row'>{ item.createTime }</div>
            <div className='row'>
              <span className="left">订单编号 {item.id}</span>
              <span className={`right ${item.paidStatus !== 1 ?  "red" : ""}`}>{ ORDERSTATUS[item.paidStatus] }</span>
            </div>
            <div className={`content ${item.pdId}`}>
              <img src={item.url} alt="" className="avatar"/>
              <div className="text">
                <h3>{item.name}</h3>
                <p>{item.mainName}</p>
              </div>
            </div>
            <div className="price">
              合计: ￥{item.totalPrice}
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default Order

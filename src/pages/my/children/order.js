import React, { Component } from 'react'
import { getOrderDesc } from '@/api'
import './order.less'

class Order extends Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: []
    }
  }


  componentDidMount() {
    getOrderDesc().then(res => {
      this.setState({
        orders: res.data
      })
    })
  }

  render() {
    const { orders } = this.state
    const dict = ['product1', 'product2', 'product3', 'product4']
    return (
      <div className='order_box'>
        <h3>这是我的订单</h3>
        {orders.map((item, index) => (
          <div className={`item ${dict[item.type]}`} key={index}>
            于{item.time}花费{item.price}购买了{item.product}，服务时长{item.hour}小时,评价为:{item.evaluate || '该用户很懒，没有做出评价'}
          </div>
        ))}
      </div>
    )
  }
}

export default Order

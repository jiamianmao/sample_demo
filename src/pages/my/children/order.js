import React, { Component } from 'react'
import { getOrderDesc } from '@/api'
import './order.less'

class Order extends Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      priceUp: true,
      timeUp: true,
      hourUp: true
    }
  }

  componentDidMount() {
    getOrderDesc().then(res => {
      this.setState({
        orders: res.data
      })
    })
  }

  handleFilter(type) {
    let newArr = []
    let dict = {
      'price': this.state.priceUp,
      'time': this.state.timeUp,
      'hour': this.state.hourUp
    }

    let key = type + 'Up'
    let value = !dict[type]
    
    newArr = this.state.orders.sort((a, b) => {
      if (type !== 'time') {
        if (dict[type]) {
          return a[type] - b[type]
        } else {
          return b[type] - a[type]
        }
      } else {
        if (dict[type]) {
          return +new Date(a[type]) - +new Date(b[type])
        } else {
          return +new Date(b[type]) - +new Date(a[type])
        }
      }
    })

    this.setState({
      orders: newArr,
      [key]: value
    })
  }

  render() {
    const { orders, priceUp, timeUp, hourUp } = this.state
    const dict = ['product1', 'product2', 'product3', 'product4']
    return (
      <div className='order_box'>
        <h3>这是我的订单</h3>
        <div className="type">
          <button className="type_item" onClick={() => this.handleFilter('price')}>价格{priceUp ? '升序' : '降序'}</button>
          <button className="type_item" onClick={() => this.handleFilter('time')}>时间{timeUp ? '升序' : '降序'}</button>
          <button className="type_item" onClick={() => this.handleFilter('hour')}>时长{hourUp ? '升序' : '降序'}</button>
        </div>
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

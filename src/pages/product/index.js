import React, { Component } from 'react'
import PayButton from '@/components/pay_button'
import { STAR } from '@/util/dict'
import { connect } from 'react-redux'
import { makeOrderInfo } from '@/redux/order'
import Radio from 'antd/lib/radio'
import 'antd/lib/radio/style/index.css'
import './style.less'

@connect(
  state => state,
  { makeOrderInfo }
)
class Product extends Component {
  constructor(props) {
    super(props)
    this.state = {
      starName: '',
      price: Math.random() * 1000 | 0,
      select: 1
    }
  }

  componentDidMount() {
    this.id = this.props.match.params.id
    this.setState({
      starName: STAR[this.id]
    })
  }

  handlePay() {
    this.props.makeOrderInfo({
      productId: this.state.starName,
      price: this.state.price,
      type: this.state.select
    })
    this.props.history.push(`/custrominfo?id=${this.id}`)
  }

  onChange(e) {
    this.setState({
      select: e.target.value
    })
  }

  render() {
    const RadioGroup = Radio.Group
    return (
      <div className='product'>
        <div className="content">
          <h3>玩谁？</h3>
          <p>这是一个名叫{this.state.starName}的产品</p>
          价格为{this.state.price}元
        </div>
        <h3>想怎么玩？</h3>
        <RadioGroup onChange={e => this.onChange(e)} value={this.state.select}>
          <Radio value={1}>单男</Radio>
          <Radio value={2}>双飞</Radio>
          <Radio value={3}>4P</Radio>
        </RadioGroup>
        <PayButton
          onPay={() => this.handlePay()}
          price={this.state.price}
        />
      </div>
    )
  }
}

export default Product

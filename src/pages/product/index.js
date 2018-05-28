import React, { Component } from 'react'
import PayButton from '@/components/pay_button'
import { STAR } from '@/util/dict'
import { connect } from 'react-redux'
import { makeOrderInfo } from '@/redux/order'
import Radio from 'antd/lib/radio'
import Checkbox from 'antd/lib/checkbox'
import 'antd/lib/radio/style/index.css'
import 'antd/lib/checkbox/style/index.css'
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
      select: 1,
      pro: [],
      balance: 0
    }
  }

  componentDidMount() {
    this.id = this.props.match.params.id
    this.setState({
      starName: STAR[this.id],
      balance: 999
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
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  onCheckBox(checkedList) {
    this.setState({
      pro: checkedList
    })
  }

  render() {
    const RadioGroup = Radio.Group
    const CheckboxGroup  = Checkbox.Group
    const plainOptions = ['莞式', '泰式']
    const { price, select, pro, balance } = this.state
    let proPrice = 0
    if (pro.length === 2) {
      proPrice = 300
    } else if (pro.includes('莞式')) {
      proPrice = 199
    } else if (pro.includes('泰式')) {
      proPrice = 198
    }
    const sum = price * select + proPrice
    return (
      <div className='product'>
        <div className="content">
          <h3>玩谁？</h3>
          <p>这是一个名叫{this.state.starName}的产品</p>
          价格为{this.state.price}元
        </div>
        <h3>想怎么玩？</h3>
        <RadioGroup onChange={e => this.onChange(e)} name='select' value={this.state.select}>
          <Radio value={1}>单男</Radio>
          <Radio value={2}>双飞</Radio>
          <Radio value={3}>4P</Radio>
        </RadioGroup>
        <h3>增值服务</h3>
        <CheckboxGroup options={plainOptions} name='pro' value={this.state.pro} onChange={(checkedList) => this.onCheckBox(checkedList)} />
        <PayButton
          onPay={() => this.handlePay()}
          price={sum}
          balance={balance}
        />
      </div>
    )
  }
}

export default Product

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.less'

class PayButton extends Component {
  static propTypes = {
    text: PropTypes.string,
    price: PropTypes.number,
    balance: PropTypes.number
  }

  static defaultProps = {
    text: '下单',
    price: 0,
    balance: 0
  }

  render() {
    const { balance, price, text } = this.props
    return (
      <div className="pay_button">
        <p className='left'>
          <span>￥{price}元</span>
          {price > balance ? <span>钱不够了</span> : null}
          <span>余额:{balance}</span>
        </p>
        <p className='right' onClick={() => this.props.onPay()}>{text}</p>
      </div>
    )
  } 
}

export default PayButton

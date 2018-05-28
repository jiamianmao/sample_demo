import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.less'

class PayButton extends Component {
  static propTypes = {
    text: PropTypes.string,
    price: PropTypes.number
  }

  static defaultProps = {
    text: '下单',
    price: 0
  }

  render() {
    return (
      <div className="pay_button">
        <span>￥{this.props.price}元</span>
        <p onClick={() => this.props.onPay()}>{this.props.text}</p>
      </div>
    )
  } 
}

export default PayButton

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
    const { price, text } = this.props
    return (
      <div className="pay_button">
        <p className='left'>
          <span>￥{price}元</span>
        </p>
        <p className='right' onClick={() => this.props.onPay()}>{text}</p>
      </div>
    )
  } 
}

export default PayButton

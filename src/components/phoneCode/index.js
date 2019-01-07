import React, { Component } from 'react'
import './style.less'

class PhoneCode extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '获取验证码',
      start: false
    }
  }

  handleClick() {
    let { start, text } = this.state
    let _this = this

    if (start) {
      return
    }
    let time = 60
    start = true
    this.timer = setTimeout(function setTime() {
      time--
      if (time === 0) {
        start = false
      } else {
        setTimeout(setTime, 1000)
      }
      _this.setState({
        start,
        text: time || text
      })
    }, 100)
  }

  render() {
    const { text } = this.state
    const content = typeof text === 'number' ? `${text}秒` : text
    return (
      <div className={`phoneCode ${typeof text === 'number' ? 'no' : ''}`} onClick={() => this.props.handleClick()}>{ content }</div>
    )
  }

}

export default PhoneCode

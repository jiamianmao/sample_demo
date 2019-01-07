import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import PhoneCode from '@/components/phoneCode'
import Cookie from 'js-cookie'
import { login, sendVCode } from '@/api/common'
import validate from '@/util/validate'
import './style.less'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      params: {
        mobile: '',
        vcode: '',
      },
      redirectToReferrer: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.login = this.login.bind(this)
    this.getCode = this.getCode.bind(this)
  }

  handleChange(e) {
    const { name, value } = e.target
    const { params } = this.state
    this.setState({
      params: {
        ...params,
        [name]: value
      }
    })
  }

  login() {
    const { params } = this.state
    const { pathname } = this.props.location
    validate(params).then(() => {
      login(params).then(res => {
        const { payload } = res
        if (payload.verified) {
          Cookie.set('sessionId', payload.sessionId)
          this.setState({
            redirectToReferrer: true
          })
        } else {
          this.props.history.push(`/attestation?from=${pathname}`)
        }
      })
    })
  }

  getCode() {
    const params = {
      mobile: this.state.params.mobile
    }
    validate(params).then(() => {
      this.PhoneCode.handleClick()
      sendVCode(params, {
        type: 'msiteLogin'
      })
    }).catch((arr) => {
      console.log(arr)
    })
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state

    if (redirectToReferrer) {
      return <Redirect to={from} />
    }

    return (
      <div className="login">
        <div className="logo">
          <img src={require('../../assets/login/logo.png')} alt=""/>
        </div>
        <div className="item">
          <label htmlFor="account">
            <img src={require('../../assets/login/phone.png')} alt=""/>
          </label>
          <input placeholder='手机号码' type="text" id='account' name='mobile' onChange={this.handleChange} value={this.state.account} />
        </div>
        <div className="item">
          <label htmlFor="password">
            <img src={require('../../assets/login/pwdlock.png')} alt=""/>
          </label>
          <input placeholder='验证码' type="password" id='password' name='vcode' onChange={this.handleChange} />
          <PhoneCode handleClick={this.getCode} ref={(PhoneCode) => this.PhoneCode = PhoneCode} />
        </div>
        <button className='btn' onClick={this.login}>登录</button>
      </div>
    )
  }
}

export default Login

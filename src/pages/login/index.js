import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Storage from 'good-storage'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      account: '',
      password: '',
      redirectToReferrer: false
    }
    this.handleChaneg = this.handleChaneg.bind(this)
    this.login = this.login.bind(this)    
  }

  componentDidMount() {
    console.log(this.props)
  }

  handleChaneg(e) {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  login() {
    Storage.set('info', 'ok')
    this.setState({
      redirectToReferrer: true
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
        <div className="item">
          <label htmlFor="account">账号</label>
          <input type="text" id='account' name='account' onChange={this.handleChaneg} value={this.state.account} />
        </div>
        <div className="item">
          <label htmlFor="password">密码</label>
          <input type="password" id='password' name='password' onChange={this.handleChaneg} />
        </div>
        <button onClick={this.login}>登录</button>
      </div>
    )
  }
}

export default Login

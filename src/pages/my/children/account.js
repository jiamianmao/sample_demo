import React, { Component } from 'react'
import Storage from 'good-storage'

class Account extends Component {

  handleQuit() {
    Storage.clear('info')
    this.props.history.replace('/')
  }

  render() {
    return (
      <div className="account">
        <h3>这是账号管理</h3>
        <button onClick={() => this.handleQuit()}>退出当前账户</button>
      </div>
    )
  }
}

export default Account

import React, { Component } from 'react'
import Storage from 'good-storage'
import PublicAlert from '@/components/alert'

class Account extends Component {
  constructor(props) {
    super(props)
    this.state = {
      alertStatus: false,
      alertTip: '退出成功!',
      num: 0
    }
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        num: this.state.num + 1
      })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  handleQuit() {
    this.setState({
      alertStatus: true
    })
  }

  closeAlert = () => {
    this.setState({
      alertStatus: false
    }, () => {
      Storage.clear('info')
      this.props.history.replace('/')
    })
  }

  render() {
    return (
      <div className="account">
        <h3>这是账号管理</h3>
        <PublicAlert closeAlert={this.closeAlert} alertTip={this.state.alertTip} alertStatus={this.state.alertStatus} />
        <button onClick={() => this.handleQuit()}>退出当前账户</button>
      </div>
    )
  }
}

export default Account

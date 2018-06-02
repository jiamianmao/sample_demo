import React, { Component } from 'react'
import { getAddressList } from '@/api'
import './address.less'

class Address extends Component {
  constructor(props) {
    super(props)
    this.state = {
      adddressList: []
    }
  }

  componentDidMount() {
    getAddressList().then(res => {
      this.setState({
        adddressList: res.data
      })
    })
  }

  render() {
    const { adddressList } = this.state
    return (
      <div className='addressManage'>
        <h3>地址管理</h3>
        {adddressList.map((item, index) => (
          <div className='item' key={index}>
            <p>地址: {item.address}</p>
            <p>联系方式: {item.mobile}</p>
            <p>联系人: {item.user}</p>
          </div>
        ))}
      </div>
    )
  }
}

export default Address

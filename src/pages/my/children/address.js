import React, { Component } from 'react'
import { getAddressList } from '@/api'

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
    return (
      <div className='addressManage'>
        <h3>地址</h3>
      </div>
    )
  }
}

export default Address

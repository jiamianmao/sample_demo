import React, { Component } from 'react'
import { connect } from 'react-redux'
import PayButton from '@/components/pay_button'
import './style.less'

@connect(
  state => state
)
class CustromInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      price: 0,
      productId: '',
      type: '',
      custromInfo: []
    }
  }

  componentDidMount() {
    const { price, productId, type } = this.props.order
    if (!price || !productId || !type) {
      this.props.history.go(-1)
    }
    let arr = []
    for (let i = 0;i < type || 0;i++) {
      arr.push({
        name: '',
        age: '',
        hour: '',
        specialHobby: ''
      })
    }
    this.setState({
      price,
      productId,
      type,
      custromInfo: arr
    })
  }

  handleClick(e, index) {
    let obj = this.state.custromInfo[index]
    obj[e.target.id] = e.target.value
    let custromInfo = [...this.state.custromInfo]
    custromInfo.splice(index, 1, obj)
    this.setState({
      custromInfo
    })
  }

  render() {
    const { custromInfo } = this.state
    return (
      <div className='custromInfo'>
        <div className="selectPeople">
          {custromInfo.map((item, index) => (
            <div className="infoBox" key={index}>
              <h3>第{index + 1}个客户</h3>
              <div className='item'>
                <label htmlFor="name">名字</label>
                <input type="text" id='name' value={this.state.custromInfo[index].name} onChange={e => this.handleClick(e, index)} />
              </div>
              <div className='item'>
                <label htmlFor="age">年龄</label>
                <input type="text" id='age' value={this.state.custromInfo[index].age} onChange={e => this.handleClick(e, index)} />
              </div>
              <div className='item'>
                <label htmlFor="hour">服务时长</label>
                <input type="text" id='hour' value={this.state.custromInfo[index].hour} onChange={e => this.handleClick(e, index)} />
              </div>
              <div className='item'>
                <label htmlFor="specialHobby">特殊癖好</label>
                <input type="text" id='specialHobby' value={this.state.custromInfo[index].specialHobby} onChange={e => this.handleClick(e, index)} />
              </div>
            </div>
          ))}
        </div>
        <PayButton
          price={this.state.price}
          text='包夜'
        />
      </div>
    )
  }
}

export default CustromInfo

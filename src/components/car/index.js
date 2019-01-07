import React, { Component } from 'react'
import { Picker } from 'antd-mobile'
import PropTypes from 'prop-types'
import { VEHICLETYPES } from '@/util/dict'
import './style.less'

const CustomChildren = props => (
  <div style={{ width: '100%' }} onClick={props.onClick}>
    <div className="test" style={{ display: 'flex', height: '40px', lineHeight: '40px', width: '100%' }}>
      <div style={{ width: '100px', textAlign: 'left' }}>{props.children}</div>
      <div style={{ flex: 1, color: '#888', marginRight: 15 }}>{props.extra}</div>
    </div>
  </div>
)

class Car extends Component {
  static propTypes = {
    carInfo: PropTypes.object
  }

  static defaultProps = {
    carInfo: {
      plateNumber: '',
      vehicleType: '',
      owner: '',
      usingNature: '0',
      vin: ''
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      title: '权益车辆'
    }
  }

  handleSelectType = index => {
    let { carInfo } = this.props
    carInfo = {
      ...carInfo,
      vehicleType: index[0]
    }
    this.props.onInfoChange(carInfo)
  }

  handleChange = e => {
    const { name, value } = e.target
    let { carInfo } = this.props
    carInfo = {
      ...carInfo,
      [name]: value
    }
    this.props.onInfoChange(carInfo)
  }

  render() {
    const { carInfo } = this.props
    const { title } = this.state
    const vehicleType = [carInfo.vehicleType]
    return (
      <div className="car">
        <h3>{ title }</h3>
        <div className="content">
          <div>
            <label htmlFor="plateNumber">车牌号码</label>
            <input type="text" id='plateNumber' name='plateNumber' value={carInfo.plateNumber} onChange={this.handleChange} />
          </div>
          <Picker
            data={VEHICLETYPES}
            title='选择车辆类型'
            value={vehicleType}
            cols={1}
            onChange={this.handleSelectType}
          >
            <CustomChildren arrow="horizontal">车辆类型</CustomChildren>
          </Picker>
          <div>
            <label htmlFor="owner">所有人</label>
            <input type="text" id='owner' name='owner' value={carInfo.owner} onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor="usingNature">使用性质</label>
            <input type="text" id='usingNature' name='usingNature' value='非营运车辆' readOnly onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor="vin">车辆识别代号</label>
            <input type="text" id='vin' name='vin' value={carInfo.vin} onChange={this.handleChange} />
          </div>
        </div>
      </div>
    )
  } 
}

export default Car

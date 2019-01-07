import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Picker } from 'antd-mobile'
import { IDTYPES } from '@/util/dict'
import './style.less'

const CustomChildren = props => (
  <div style={{ width: '100%' }} onClick={props.onClick}>
    <div className="test" style={{ display: 'flex', height: '40px', lineHeight: '40px', width: '100%' }}>
      <div style={{ width: '100px', textAlign: 'left' }}>{props.children}</div>
      <div style={{ flex: 1, color: '#888', marginRight: 15 }}>{props.extra}</div>
    </div>
  </div>
)

class Man extends Component {
  static propTypes = {
    manInfo: PropTypes.object,
    title: PropTypes.string
  }

  static defaultProps = {
    manInfo: {
      realName: '',
      idType: '',
      idNumber: '',
      mobile: ''
    },
    title: '权益人'
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.manInfo === nextProps.manInfo && this.props.title === nextProps.title) {
      return false
    } else {
      return true
    }
  }

  handleSelectType = index => {
    let { manInfo } = this.props
    manInfo = {
      ...manInfo,
      idType: index[0]
    }
    this.props.onInfoChange(manInfo)
  }

  handleChange = e => {
    const { name, value } = e.target
    let { manInfo } = this.props
    manInfo = {
      ...manInfo,
      [name]: value
    }
    this.props.onInfoChange(manInfo)
  }

  render() {
    const { manInfo, title } = this.props
    const idType = [manInfo.idType]
    return (
      <div className="man">
        <h3>{ title }</h3>
        <div className="content">
          <div>
            <label htmlFor="realName">姓名</label>
            <input type="text" id='realName' name='realName' value={manInfo.realName} onChange={this.handleChange} />
          </div>
          <Picker
            data={IDTYPES}
            title='选择证件类型'
            value={idType}
            cols={1}
            onChange={this.handleSelectType}
          >
            <CustomChildren arrow="horizontal">证件类型</CustomChildren>
          </Picker>
          <div>
            <label htmlFor="idNumber">证件号码</label>
            <input type="text" id='idNumber' name='idNumber' value={manInfo.idNumber} onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor="mobile">手机号码</label>
            <input type="text" id='mobile' name='mobile' value={manInfo.mobile} onChange={this.handleChange} />
          </div>
        </div>
      </div>
    )
  } 
}

export default Man

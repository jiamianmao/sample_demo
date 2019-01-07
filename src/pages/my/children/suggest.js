import React, { Component } from 'react'
import { Toast, Modal } from 'antd-mobile'
import { commitFeedback } from '@/api/my'
import './suggest.less'

class Suggest extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      modal: false
    }
  }

  handleChange = e => {
    const { value } = e.target
    this.setState({
      text: value
    })
  }

  handleSubmit = () => {
    const { text } = this.state
    if (text.length) {
      commitFeedback(text).then(res => {
        this.setState({
          modal: true
        })
      })
    } else {
      Toast.fail('请输入您的建议', 3)
    }
  }

  onClose = key => () => {
    this.setState({
      [key]: false
    })

    this.props.history.go(-1)
  }

  render() {
    return (
      <div className="suggest">
        <textarea placeholder='请输入您的建议' cols="30" rows="10" onChange={this.handleChange}></textarea>
        <button className='button' onClick={this.handleSubmit}>提交</button>
        <Modal
          visible={this.state.modal}
          transparent
          onClose={this.onClose('modal')}
          title="提示"
          footer={[{ text: '确定', onPress: () => { this.onClose('modal')() } }]}
        >
          <div>提交成功</div>
        </Modal>
      </div>
    )
  }
}

export default Suggest

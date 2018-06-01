import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { changeCarManage, clearCarManage } from '@/redux/carManage'

@connect (
  state => state,
  { changeCarManage, clearCarManage }
)

class Car extends Component {
  constructor(props) {
    super(props)
    this.state = {
      no: '',
      color: '',
      model: '',
      user: '',
      content: ''
    }
  }

  componentDidMount() {
    this.setState(this.props.carManage)
  }

  componentWillUnmount() {
    this.props.changeCarManage(this.state)
  }

  handleChange(e) {
    const { id, value } = e.target
    this.setState({
      [id]: value
    })
  }

  handleSubmit() {
    this.setState({
      no: '',
      color: '',
      model: '',
      user: '',
      content: ''
    }, () => {
      this.props.clearCarManage()
      this.props.history.go(-1)
    })
  }

  render() {
    const { no, color, model, user, content } = this.state
    return (
      <div>
        <h3>车辆管理</h3>
        <div>
          <p>
            <label htmlFor="no">车牌号</label>
            <input type="text" id='no' value={no} onChange={e => this.handleChange(e)} />
          </p>
          <p>
            <label htmlFor="color">颜色</label>
            <input type="text" id='color' value={color} onChange={e => this.handleChange(e)} />
          </p>
          <p>
            <label htmlFor="model">车型</label>
            <input type="text" id='model' value={model} onChange={e => this.handleChange(e)} />
          </p>
          <p>
            <label htmlFor="user">车主</label>
            <input type="text" id='user' value={user} onChange={e => this.handleChange(e)} />
          </p>
          <p>
            <label htmlFor="content">有什么想说的？</label>
            <Link to='/my/car/content'>
              <input type="text" value={content} />
            </Link>
          </p>
        </div>

        <button onClick={() => this.handleSubmit()}>提交</button>
      </div>
    )
  }
}

export default Car

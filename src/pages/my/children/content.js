import React, { Component } from 'react'
import { connect} from 'react-redux'
import { changeCarManage } from '@/redux/carManage'

@connect(
  state => state.carManage,
  { changeCarManage }
)
class Content extends Component {
  constructor(props) {
    super(props)
    this.state = {
      content: ''
    }
  }

  componentDidMount() {
    this.setState({
      content: this.props.content
    })
  }

  handleChange(e) {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  handleClick() {
    this.props.changeCarManage(this.state)
    this.props.history.go(-1)
  }

  render() {
    return (
      <div>
        <textarea cols="30" rows="10" name='content' onChange={e => this.handleChange(e)}></textarea>
        <div className="btn">
          <button onClick={() => this.handleClick()}>确认</button>          
        </div>
      </div>
    )
  }
}

export default Content

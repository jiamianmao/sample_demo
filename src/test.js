import React, { Component } from 'react'
import withStorage from '@/util/test'
import { is, fromJS } from 'immutable'

@withStorage
class Test extends Component {
  constructor(props) {
    super(props)
    this.state = {
      num: 0,
      title: {
        'name': 'solo',
        'age': 29
      },
      arr: ['周杰伦', '五月天', '李荣浩', '张学友']
    }
  }
  componentWillMount() {
    console.log('你好，这是我的子组件CWM')
  }

  handleClick = () => {
    // let newArr = this.state.arr.unshift('haha')
    let newArr = this.state.arr
    newArr[2] = '王力宏'
    this.setState({
      // title: {
      //   ...this.state.title,
      //   age: this.state.title.age < 35 ? this.state.title.age + 1 : this.state.title.age
      // }
      arr: newArr
    })
  }

  render() {
    console.log('父组件重新render了')
    return (
      <div>
        <h2 onClick={this.handleClick}>{this.props.data}</h2>
        <p>{this.state.num}</p>
        歌手{this.state.arr.map((item, index) => (
          <p key={index}><i>{item}</i></p>
        ))}
        <Demo content={this.state}></Demo>
        {/* <h2 onClick={(e) => this.haha(e)}>{this.props.data}</h2>
        <h2 onClick={this.handleClick}>{this.props.data}</h2>
    <h2 onClick={this.handleClick}>{this.props.data}</h2> */}
      </div>
    )
  }
}

class Demo extends Component{
  shouldComponentUpdate(nextProps, nextState) {
    console.log(fromJS(nextProps.content.title), fromJS(this.props.content.title))
    if (is(fromJS(nextProps.content.title), fromJS(this.props.content.title))) {
      console.log('false')
      return false
    }
    return true
  }
  render() {
    console.log('执行了？')
    return (
      <div>
        {this.props.content.title.age}你好，世界.{this.props.content.title.name}
      </div>
    )
  }
}

export default Test

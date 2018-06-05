import React, { Component } from 'react'
import Storage from 'good-storage'

const withStorage = WrappedComponent => {
  return class extends Component{
    constructor(props) {
      super(props)
      this.state = {
        data: ''
      }
    }
    componentWillMount() {
      console.log('你好，这是我的父组件CWM')
      let data = Storage.get('info')
      this.setState({
        data
      })
    }

    render() {
      return <WrappedComponent data={this.state.data} {...this.props} />
    }
  }
}

export default withStorage


import React, { Component } from 'react'
import ReactCSSTransitionGroup from "react-addons-css-transition-group"
import './style.less'

class Container extends Component{
  render() {
    return (
      <ReactCSSTransitionGroup
        name='fade'
      >
        <div
          key={this.props.location.pathname}
          style={{position: 'absolute', width: '100%'}}
        >
          { this.props.chilren }
        </div>
      </ReactCSSTransitionGroup>
    )
  }
}

export default Container

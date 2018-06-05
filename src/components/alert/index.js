import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { fromJS, is } from 'immutable'
import './style.less'

class Alert extends Component{
  static propTypes = {
    closeAlert: PropTypes.func.isRequired,
    alertTip: PropTypes.string.isRequired,
    alertStatus: PropTypes.bool.isRequired
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState))
  }

  handleClose = () => {
    this.props.closeAlert()
  }

  FirstChild = props => {
    const childrenArray = React.Children.toArray(props.children);
    return childrenArray[0] || null;
  }

  render() {
    console.log('Mr.Liu')
    return (
      <ReactCSSTransitionGroup
        component={this.FirstChild}
        transitionName='alert'
      >
        {this.props.alertStatus && <div className="alert-con">
          <div className="alert-context">
            <div className="alert-content-detail" onClick={this.handleClose}>{this.props.alertTip}</div>
          </div>
        </div>}
      </ReactCSSTransitionGroup>
    )
  }
}

export default Alert

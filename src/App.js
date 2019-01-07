import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Loadable  from 'react-loadable'
import Cookie from 'js-cookie'
import './App.css'
import 'antd-mobile/dist/antd-mobile.css'
function Loading() {
  return <div>Loading...</div>;
}
const Home = Loadable({
  loader: () => import('@/pages/home'),
  loading: Loading
})
const MyInit = Loadable({
  loader: () => import('@/pages/my/init'),
  loading: Loading
})
const Product = Loadable({
  loader: () => import('@/pages/product'),
  loading: Loading
})
const Pay = Loadable({
  loader: () => import('@/pages/pay'),
  loading: Loading
})
const Tel = Loadable({
  loader: () => import('@/pages/tel'),
  loading: Loading
})
const Login = Loadable({
  loader: () => import('@/pages/login'),
  loading: Loading
})
const NotFound = Loadable({
  loader: () => import('@/pages/404'),
  loading: Loading
})

// const Test = Loadable({
//   loader: () => import('@/test'),
//   loading: Loading
// })

const Test = Loadable({
  loader: () => import('@/pages/asTest'),
  loading: Loading
})

// 受保护的路由
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    Cookie.get('sessionId') ? (
      <Component />
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Redirect exact from='/' to='/home'></Redirect>
          <Route path='/home' component={Home}></Route>
          <Route path='/tel' component={Tel}></Route>
          <PrivateRoute path='/my' component={MyInit}></PrivateRoute>
          <Route path='/product/:id' component={Product}></Route>
          <PrivateRoute path='/pay' component={Pay}></PrivateRoute>
          <Route path='/login' component={Login}></Route>
          <Route path='/test' component={Test}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </div>
    )
  }
}

export default App

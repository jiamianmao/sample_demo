import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Loadable  from 'react-loadable'
import Storage from 'good-storage'
import './App.css'
function Loading() {
  return <div>Loading...</div>;
}
// import Home from '@/pages/home'
// import MyInit from '@/pages/my/init'
// import Product from '@/pages/product'
// import CustromInfo from '@/pages/custromInfo'
// import Tel from '@/pages/tel'
// import Login from '@/pages/login'
// import NotFound from '@/pages/404'

// router base code splitting
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
const CustromInfo = Loadable({
  loader: () => import('@/pages/custromInfo'),
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

// 受保护的路由
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    Storage.get('info') ? (
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
          <Route path='/custrominfo' component={CustromInfo}></Route>
          <Route path='/login' component={Login}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </div>
    )
  }
}

export default App

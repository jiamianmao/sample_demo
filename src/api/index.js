import request from './request'

export function getOrderDesc() {
  return request({
    url: 'https://www.easy-mock.com/mock/5b10ff4677e4f2300a3cd0de/react/orderDesc'
  })
}

export function getAddressList() {
  return request({
    url: 'https://www.easy-mock.com/mock/5b10ff4677e4f2300a3cd0de/react/getAddress'
  })
}

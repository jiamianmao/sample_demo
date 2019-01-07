import request from './request'

export function getProductDataById(id) {
  return request({
    url: `msite/package/queryPackageById?id=${id}`
  })
}

export function addOrder(data) {
  return request({
    url: 'msite/order/addOrder',
    method: 'post',
    data
  })
}

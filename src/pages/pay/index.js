import React, { Component } from 'react'
import { connect } from 'react-redux'
import { PRODUCT_E } from '@/util/dict'
import { withRouter } from 'react-router-dom'
import PayButton from '@/components/pay_button'
import Man from '@/components/man'
import Car from '@/components/car'
import { addOrder } from '@/api/product'
import './style.less'

@connect(
  state => state
)
class CustromInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      price: 0,
      packageId: '',
      personUserInfo: [],
      childrenUserInfo: [],
      carInfo: [],
      isPro: false,
      benefitEffectTime: '',
      benefitExpireTime: '',
      model: ''
    }
  }                               

  componentDidMount() {
    const { price, packageId, carNumber, peopleNum, isPro, model, benefitEffectTime, benefitExpireTime } = this.props.order
    if (!price || !packageId ) {
      this.props.history.go(-1)
    }

    // 计算成年人 / 小孩 的数量
    let [adult, children] = [0, 0]
    if (packageId === 'E') {
      adult = PRODUCT_E[model][0]
      children = PRODUCT_E[model][1]
    } else {
      adult = peopleNum
    }
    const personUserInfo = new Array(adult).fill({
      realName: '',
      idType: '',
      idNumber: '',
      mobile: ''
    })
    const childrenUserInfo = new Array(children).fill({
      realName: '',
      idType: '',
      idNumber: '',
      mobile: ''
    })
    const carInfo = new Array(carNumber).fill({
      plateNumber: '',
      vehicleType: '',
      owner: '',
      usingNature: '0',
      vin: ''
    })
    this.setState({
      price,
      packageId,
      personUserInfo,
      childrenUserInfo,
      carInfo,
      isPro,
      benefitEffectTime,
      benefitExpireTime,
      model
    })
  }

  handleInfoChange = (i, type, info) => {
    if (type === 'adult') {
      let personUserInfo = this.state.personUserInfo.map((item, index) => index === i ? info : item)
      this.setState({
        personUserInfo
      })
    } else if (type === 'children') {
      let childrenUserInfo = this.state.childrenUserInfo.map((item, index) => index === i ? info : item)
      this.setState({
        childrenUserInfo
      })
    } else {
      let carInfo = this.state.carInfo.map((item, index) => index === i ? info : item)
      this.setState({
        carInfo
      })
    }
  }

  handlePay = () => {
    const params = this._createParams()
    addOrder(params).then(res => {
      console.log(res)
    })
  }

  _createParams() {
    const { packageId, benefitEffectTime, benefitExpireTime, personUserInfo, childrenUserInfo, carInfo, isPro, model } = this.state
    let params = {
      packageId
    }
    if (packageId === 'A') {
      params = {
        ...params,
        ...carInfo[0],
        benefitEffectTime,
        peopleNum: personUserInfo.length,
        personUserInfo: JSON.stringify(personUserInfo)
      }
    } else if (packageId === 'B') {
      params = {
        ...params,
        benefitEffectTime,
        benefitExpireTime,
        peopleNum: personUserInfo.length,
        personUserInfo: JSON.stringify(personUserInfo)
      }
    } else if (packageId === 'C') {
      params = {
        ...params,
        ...carInfo[0],
        personUserInfo: JSON.stringify(personUserInfo),
        vasRoadRescue: isPro,
        vasVehicle: isPro
      }
    } else if (packageId === 'D') {
      params = {
        ...params,
        ...carInfo[0],
        personUserInfo: JSON.stringify(personUserInfo),
        vasVehicle: isPro
      }
    } else if (packageId === 'E') {
      const newPersonUserInfo = personUserInfo.map(item => ({
          ...item,
          type: 1
        })
      )
      const newChildrenUserInfo = childrenUserInfo.map(item => ({
        ...item,
        type: 2
      }))
      params = {
        ...params,
        ...carInfo[0],
        personUserInfo: JSON.stringify([...newPersonUserInfo, ...newChildrenUserInfo]),
        vasVehicle: isPro,
        vasRoadRescue: isPro,
        mealType: model
      }
    }
    return params
  }

  render() {
    const { packageId, personUserInfo, childrenUserInfo, carInfo } = this.state
    let obj = packageId !== 'E' ? {} : {title: '成年人'}
    return (
      <div className='custromInfo'>
        <div className="selectPeople">
          {personUserInfo.map((item, index) => (
            <Man key={index} {...obj} onInfoChange={this.handleInfoChange.bind(this, index, 'adult')} manInfo={item} />
          ))}
          {childrenUserInfo.map((item, index) => (
            <Man key={index} title='儿童' onInfoChange={this.handleInfoChange.bind(this, index, 'children')} manInfo={item} />
          ))}
          {carInfo.map((item, index) => (
            <Car key={index} onInfoChange={this.handleInfoChange.bind(this, index, 'car')} carInfo={item} />
          ))}
        </div>
        <PayButton
          onPay={this.handlePay}
          price={this.state.price}
          text='付款'
        />
      </div>
    )
  }
}

export default withRouter(CustromInfo)

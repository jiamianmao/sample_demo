import React, { Component } from 'react'
import PayButton from '@/components/pay_button'
import { getProductDataById } from '@/api/product'
import { connect } from 'react-redux'
import { makeOrderInfo } from '@/redux/order'
import { PRODUCTDICT } from '@/util/dict'
import 'antd-mobile/dist/antd-mobile.css'
import { format, addDays, differenceInDays } from 'date-fns'
import Special from './children/special'
import ShouldKnow from './children/shouldKnow'
import './style.less'

const nowTimeStamp = Date.now() + 1000 * 60 * 60 * 24
const now = new Date(nowTimeStamp)
@connect(
  state => state,
  { makeOrderInfo }
)
class Product extends Component {
  constructor(props) {
    super(props)
    this.state = {
      productData: {},
      productBase: {},
      date_start: now,
      date_end: now,
      date_end_end: '',
      date_end_start: '',
      val: 0,
      isPro: false,
      model: 1
    }
  }

  componentDidMount() {
    this.id = this.props.match.params.id
    this._getProductData()
  }

  handlePay = () => {
    const { selectDate, selectDates, val, isPro, model } = this.state
    let peopleNum = 1
    let carNumber = 1
    if (this.id === 'A') {
      peopleNum += val
    } else if (this.id === 'B') {
      peopleNum = val
    } else if (this.id === 'C') {
      carNumber = isPro ? carNumber : 0
    } else if (this.id === 'D') {
      peopleNum = 2
    }

    this.props.makeOrderInfo({
      packageId: this.id,
      price: this.sum,
      peopleNum,
      carNumber,
      isPro,
      model,
      benefitEffectTime: selectDate,
      benefitExpireTime: selectDates
    })
    this.props.history.push(`/pay?id=${this.id}`)
  }

  handleRightNumChange = val => {
    this.setState({ val })
  }

  handleDateChange(date, type) {
    const selectDate = format(date, 'YYYY-MM-DD')
    const { productData } = this.state
    let params = {}
    if (type === 'start') {
      params = {
        ...params,
        selectDate
      }
      if (productData.id === 'B') {
        params = {
          ...params,
          date_end_start: addDays(selectDate, 1)
        }
      }
    } else {
      params = {
        ...params,
        selectDates: selectDate
      }
    }

    this.setState(params)
  }

  handleSpecialState(params) {
    this.setState(params)
  }

  _getProductData() {
    getProductDataById(this.id).then(res => {
      let { payload } = res
      let params = {}
      payload.specifics = JSON.parse(payload.specifics)

      if (payload.id === 'A') {
        params = {
          date_end: new Date(nowTimeStamp + 1000 * 60 * 60 * 24 * payload.specifics.main.initialTimeLimit)
        }
      }
      if (payload.id === 'B') {
        params = {
          date_end: new Date(nowTimeStamp + 1000 * 60 * 60 * 24 * payload.specifics.main.initialTimeLimit - 2),
          date_end_end: new Date(nowTimeStamp + 1000 * 60 * 60 * 24 * payload.specifics.main.initialTimeLimit)
        }
      }
      this.setState({
        productData: payload,
        productBase: PRODUCTDICT[this.id],
        val: this.id === 'A' ? 0 : 1,
        ...params
      })
    })
  }

  render() {
    const { productData, productBase, selectDate, val, selectDates, isPro, model, ...args } = this.state
    const { specifics } = productData
    const addNum = specifics ? specifics.main.addPrice || specifics.main.price : 0
    const vas = productData.id === 'C' ? 85 : 39
    let sum = 0
    if (productData.id === 'A') {
      sum = specifics ? (specifics.main.price + val * addNum) : 0
    } else if (productData.id === 'B') {
      let distance = differenceInDays(selectDates, selectDate) || 1
      sum = specifics.main.price * val * distance * (distance >= 15 ? 0.8 : 1)
    } else if (productData.id === 'C' || productData.id === 'D') {
      sum = specifics ? (specifics.main.price + (isPro ? vas : 0)) : 0
    } else {
      sum = specifics ? (specifics.main.price + (model === 3 ? specifics.main.addPrice : 0)) : 0
    }
    this.sum = sum
    const obj = {
      ...args,
      model,
      isPro,
      productData,
      productBase,
      selectDate,
      selectDates,
      addNum,
      val,
      vas
    }
    return (
      <div className='product'>
        <div className="main-img">
          <img src={productBase.url} alt=""/>
        </div>
        <div className="main-text">
          <h3>{productBase.title}</h3>
          {productBase.point && productBase.point.map((item, index) => (
            <span className='point' key={index}>{item}</span>
          ))}
          <p className='desc'>{ productBase.desc }</p>
        </div>
        <Special onDateChange={this.handleDateChange.bind(this)} onSpecialState={this.handleSpecialState.bind(this)} onRightNumChange={this.handleRightNumChange.bind(this)}  {...obj}  />
        <ShouldKnow />
        <PayButton
          onPay={this.handlePay}
          price={sum}
        />
      </div>
    )
  }
}

export default Product

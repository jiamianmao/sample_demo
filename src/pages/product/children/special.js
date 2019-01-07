import React, { Component } from 'react'
import propsTypes from 'prop-types'
import { ISHAVE, PRODUCT } from '@/util/dict'
import { DatePicker, Stepper } from 'antd-mobile'

export default class Special extends Component {
  static propTypes = {
    productBase: propsTypes.object,
    productData: propsTypes.object.isRequired
  }

  handleClick(params) {
    this.props.onSpecialState(params)
  }

  render() {
    const { productBase, productData, date_start, date_end, selectDate, date_end_start, date_end_end, selectDates, addNum, val, isPro, vas, model } = this.props
    const addText = productData.id === 'A' ? '增加权益人' : productData.id === 'B' ? '权益人数' : ''
    const max = productData.specifics ? productData.specifics.main.maxPurchases : 10
    return (
      <div className='special'>
        <div className='privilege'>
          <h3>专属特权</h3>
          <div className='rights_list'>
            {productBase.rightList && productBase.rightList.map((item, index) => (
              <div className='rights_item' key={index}>
                <img src={ISHAVE[item].true} alt='' />
                <span>{ PRODUCT[item] }</span>
              </div>
            ))}
          </div>
        </div>
        {productData.id === 'A' || productData.id === 'B' ? (
          <div className='date'>
            <div className='rights_list'>
              <h3>生效日期</h3>
              <DatePicker
                mode='date'
                minDate={date_start}
                maxDate={date_end}
                onChange={date => this.props.onDateChange(date, 'start')}
              >
                <div className='date_picker'>
                  <span>{ selectDate || '请选择日期'}</span>
                  <img src={require('../../../assets/product/date.png')} alt='' />
                </div>
              </DatePicker>
            </div>
            {productData.id === 'B' ? (
              <div className='rights_list'>
                <h3>失效日期</h3>
                <DatePicker
                  mode='date'
                  minDate={date_end_start}
                  maxDate={date_end_end}
                  onChange={date => this.props.onDateChange(date, 'end')}
                  disabled={!selectDate}
                >
                  <div className='date_picker'>
                    <span>{ selectDates || '请选择日期'}</span>
                    <img src={require('../../../assets/product/date.png')} alt='' />
                  </div>
                </DatePicker>
              </div>
            ) : null}
          </div>
        ) : null}
        {
          productData.id === 'A' || productData.id === 'B' ? (
            <div className='addRights'>
              <h3>{addText}{
                productData.id === 'A' ? (
                  <span>￥{addNum} / 人</span>
                ) : null
              }</h3>
              <div>
                <Stepper
                  showNumber
                  max={max}
                  min={productData.id === 'B' ? 1 : 0}
                  value={val}
                  onChange={this.props.onRightNumChange}
                ></Stepper>
              </div>
            </div>
          ) : null
        }
        {productData.id === 'C' || productData.id === 'D' ? (
          <div className='rights_list'>
            <h3>增值权益</h3>
            <div className="proList">
              <div className="left" onClick={this.handleClick.bind(this, {isPro: !isPro})}>
                {
                  isPro ? (
                    <img src={require("../../../assets/product/selected.png")} alt=""/>
                  ) : (
                    <img src={require("../../../assets/product/selected-no.png")} alt=""/>
                  )
                }
                <span>￥{vas}</span>
              </div>
              { productData.id === 'C' ? (
                <div className="item">
                  {
                    isPro ? (
                      <img src={require("../../../assets/product/icon-truck@2x.png")} alt=""/>
                    ) : (
                      <img src={require("../../../assets/product/icon-truck-no@2x.png")} alt=""/>
                    )
                  }
                  <span>道路救援</span>
                </div>
              ) : null}
              <div className="item">
                {
                  isPro ? (
                    <img src={require("../../../assets/product/icon-car@2x.png")} alt=""/>
                  ) : (
                    <img src={require("../../../assets/product/icon-car-no@2x.png")} alt=""/>
                  )
                }
                <span>出险代步车</span>
              </div>
            </div>
          </div>
        ) : null}
        {productData.id === 'E' ? (
          <div className='selectModel'>
            <div className="proList">
              <div className="item" onClick={this.handleClick.bind(this, {model: 1})}>
                {
                  model === 1 ? (
                    <img src={require("../../../assets/product/selected.png")} alt=""/>
                  ) : (
                    <img src={require("../../../assets/product/selected-no.png")} alt=""/>
                  )
                }
                <div>
                  <p>2成年人</p>
                  <p>1未成年人</p>
                </div>
              </div>
              <div className="item" onClick={this.handleClick.bind(this, {model: 2})}>
                {
                  model === 2 ? (
                    <img src={require("../../../assets/product/selected.png")} alt=""/>
                  ) : (
                    <img src={require("../../../assets/product/selected-no.png")} alt=""/>
                  )
                }
                <div>
                  <p>1成年人</p>
                  <p>2未成年人</p>
                </div>
              </div>
              <div className="item" onClick={this.handleClick.bind(this, {model: 3})}>
                {
                  model === 3 ? (
                    <img src={require("../../../assets/product/selected.png")} alt=""/>
                  ) : (
                    <img src={require("../../../assets/product/selected-no.png")} alt=""/>
                  )
                }
                <div>
                  <p>2成年人</p>
                  <p>2未成年人</p>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    )
  }
}

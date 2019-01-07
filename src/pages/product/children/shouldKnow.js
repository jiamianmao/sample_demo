import { Accordion } from 'antd-mobile'
import React from 'react'

const ShouldKnow = () => (
  <div className='shouldKnow'>
    <Accordion
      accordion
    >
      <Accordion.Panel header="权益人须知">
        权益人须知 （水向东流时间怎么偷？）
      </Accordion.Panel>
      <Accordion.Panel header="直升机救援服务">
        直升机救援服务 （心若倦了，泪也干了。）
      </Accordion.Panel>
      <Accordion.Panel header="地面120服务">
        地面120服务 （听不到，听不到）
      </Accordion.Panel>
      <Accordion.Panel header="道路救援服务">
        道路救援服务 （秋刀鱼的味道，猫和你都想了解~）
      </Accordion.Panel>
      <Accordion.Panel header="出险代步车服务">
        出险代步车服务 （居酒屋里的小神龛）
      </Accordion.Panel>
    </Accordion>
    <div className='notice-logo'>
      <img src='https://m.flashelp.cn/static/img/icon_logo_color.f69ab1e.png' alt='' />
    </div>
  </div>
)

export default ShouldKnow

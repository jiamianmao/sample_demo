const PRODUCT = {
  'medicalTransfer': '医疗转院9折',
  'firstAid': '直升机院前救援',
  'roadRescue': '道路救援',
  'ambulance': '120协调',
  'scooter': '出险代步车'
}

const ICON = {
  medicalTransfer: {
    true: require('../assets/my/medicalTransfer.png'),
    false: require('../assets/my/medicalTransfer_will.png')
  },
  firstAid: {
    true: require('../assets/my/firstAid.png'),
    false: require('../assets/my/firstAid_will.png')
  },
  roadRescue: {
    true: require('../assets/my/roadRescue.png'),
    false: require('../assets/my/roadRescue_will.png')
  },
  ambulance: {
    true: require('../assets/my/ambulance.png'),
    false: require('../assets/my/ambulance_will.png')
  },
  scooter: {
    true: require('../assets/my/scooter.png'),
    false: require('../assets/my/scooter_will.png')
  }
}

const ISHAVE = {
  medicalTransfer: {
    true: require('../assets/product/icon-stretcher@2x.png')
  },
  firstAid: {
    true: require('../assets/product/icon-helicopter@2x.png')
  },
  roadRescue: {
    true: require('../assets/product/icon-truck@2x.png'),
    false: require('../assets/product/icon-truck-no@2x.png')
  },
  ambulance: {
    true: require('../assets/product/icon-call@2x.png'),
  },
  scooter: {
    true: require('../assets/product/icon-car@2x.png'),
    false: require('../assets/product/icon-car-no@2x.png')
  }
}

const PRODUCTDICT = {
  'A': {
    name: '急速全明星',
    title: '7天自驾综合救援权益',
    point: ['一人一车', '日期自定义', '私家车专享', '可增加同行人'],
    desc: '一个人看风景，一群人去狂欢，自驾旅途的无限美好怎能因一点“意外”戛然而止？！爱车突发状况需要帮助？急需代步车继续旅程？赶快带上你的急速全明星，解决沿途小意外，还有直升机院前救援全程为你保驾护航！还犹豫什么？记得给同行伙伴也送上一份贴心守护哦！',
    rightList: ['firstAid', 'roadRescue', 'ambulance', 'scooter'],
    url: require('../assets/product/productA.png')
  },
  'B': {
    name: '飞行保镖',
    title: '单人短期直升机院前救援权益',
    point: ['两天起购', '日期自定义', '连续购买满15天享8折优惠'],
    desc: '户外徒步，独自旅行，商务出差…随心所欲却不小心突发意外？别担心！你的飞行保镖已上线！第一时间为你出动直升机，争分夺秒赶来你身边！同时还有地面救护车随时待命，双重应急方案上天入地守护你！即日起，还可为你的同行伙伴雇佣飞行保镖哦！',
    rightList: ['firstAid', 'ambulance'],
    url: require('../assets/product/productB.png')
  },
  'C': {
    name: '空降骑士',
    title: '单人全年直升机救援权益',
    point: ['全年守护', '多项特权', '可享增值服务'],
    desc: '愿生活温柔以待却也难免发生意外？空降骑士驾到，每分每秒如影随形，时刻为你紧急待命！即日起，召唤空降骑士还可私享全年道路救援和出险代步车服务，尽显绅士风度，陪你纵情旅途！',
    rightList: ['firstAid', 'ambulance', 'medicalTransfer'],
    url: require('../assets/product/productC.png')
  },
  'D': {
    name: '丘比特之心',
    title: '双人全年综合救援权益',
    point: ['双人专享', '全年守护', '赠道路救援', '可享增值服务'],
    desc: '上辈子一百次的回眸才换来这辈子的一个TA。别再偷偷爱着她！即刻传递你的丘比特之心，意外来临再也不怕！爱神丘比特穿越时空，为你和你最爱的人带来一整年的生命守护！即刻购买还可获赠双人专享的道路救援服务，潇洒出行，一起浪迹天涯为爱出发！',
    rightList: ['firstAid', 'ambulance', 'medicalTransfer', 'roadRescue'],
    url: require('../assets/product/productD.png')
  },
  'E': {
    name: '皇家护卫队',
    title: '家庭全年综合救援权益',
    point: ['全年守护', '家庭尊享', '赠道路救援', '赠出险代步车服务'],
    desc: '幸福没有终点，守护永不停歇，一个人坚强，两个人成长，一家人平安才是生命中最大的幸福！你的专属皇家护卫队已被任命，肩负荣耀使命，时刻守卫你和家人至高无上的生命安全。更有家庭尊享的道路救援和出险代步车服务全年护驾，带至亲的家人看更多的风景，让幸福永无止境！',
    rightList: ['firstAid', 'ambulance', 'medicalTransfer', 'roadRescue', 'scooter'],
    url: require('../assets/product/productE.png')
  }
}

const ORDERSTATUS = {
  '0': '待支付',
  '1': '已支付',
  '-2': '已取消',
  '-1': '未支付',
  '-3': '支付超时'
}

const IDTYPES = [{
  value: 0,
  label: '身份证'
}, {
  value: 1, 
  label: '台胞证'
}, {
  value: 2,
  label: '回乡证'
}, {
  value: 3,
  label: '护照'
}]

const VEHICLETYPES = [
  {
    label: '轿车',
    value: '轿车'
  },
  {
    label: '越野车',
    value: '越野车'
  },
  {
    label: '商务车',
    value: '商务车'
  },
  {
    label: '皮卡',
    value: '皮卡'
  },
  {
    label: '微型客车',
    value: '微型客车'
  }
]

const PRODUCT_E = {
  1: [2, 1],
  2: [1, 2],
  3: [2, 2]
}

export {
  PRODUCT,
  ICON,
  PRODUCTDICT,
  ORDERSTATUS,
  IDTYPES,
  ISHAVE,
  PRODUCT_E,
  VEHICLETYPES
}

const CARMANAGE = 'SET_CAR_MANAGE'
const CLEARCARMANAGE = 'CLEAR_CAR_MANAGE'

// state
const initState = {
  no: '',
  color: '',
  model: '',
  user: '',
  content: ''
}

export function carManage(state = initState, action) {
  switch (action.type) {
    case CARMANAGE:
      return { ...state, ...action.payload }
    default:
      return state
  }
}

const makeCarManage = (info) => {
  return {
    type: CARMANAGE,
    payload: info
  }
}

const makeClearCarManage = () => {
  return {
    type: CLEARCARMANAGE,
    payload: ''
  }
}

export function changeCarManage(info) {
  return makeCarManage(info)
}

export function clearCarManage() {
  return makeClearCarManage()
}

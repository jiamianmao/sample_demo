const ORDER = 'SET_ORDER'

// state
const initState = {}

// reducer (mutations)
export function order(state = initState, action) {
  switch(action.type) {
    case ORDER:
      return { ...state, ...action.payload }
    default:
      return state
  }
}

// action (mutaion-types)
const makeOrder = data => {
  return {
    type: ORDER,
    payload: data
  }
}

export function makeOrderInfo(info) {
  return makeOrder(info)
}

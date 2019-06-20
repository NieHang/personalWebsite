import { constants } from './index';

const defaultState = {
  isMobile: false
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.IS_MOBILE:
      return { ...state, isMobile: action.status }
  
    default:
      return state
  }
}
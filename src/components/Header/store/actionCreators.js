import { constants } from './index'

const isMobile = (status) => ({
  type: constants.IS_MOBILE,
  status
})

export { isMobile }
import { combineReducers } from 'redux'
import { loadingReducer as loading } from 'redux/middlewares/redux-effects-loading'
import chupghep from './chupghep'
import chuphoian from './chuphoian'
import chupsanbay from './chupsanbay'
import chupbaida from './chupbaida'
import chupstudio from './chupstudio'
import chupcuoile from './chupcuoile'
import chupcuoitiec from './chupcuoitiec'
import modal from './modal'

export default combineReducers({
  loading,
  chupghep,
  chuphoian,
  chupsanbay,
  chupbaida,
  chupstudio,
  chupcuoile,
  chupcuoitiec,
  modal,
})

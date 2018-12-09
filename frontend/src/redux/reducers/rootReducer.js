import { combineReducers } from 'redux'
import { loadingReducer as loading } from 'redux/middlewares/redux-effects-loading'
import chupcuoile from './chupcuoile'
import chupcuoitiec from './chupcuoitiec'

export default combineReducers({
  loading,
  chupcuoile,
  chupcuoitiec,
})

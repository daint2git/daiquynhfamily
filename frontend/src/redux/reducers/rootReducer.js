import { combineReducers } from 'redux'
import { loadingReducer as loading } from 'redux/middlewares/redux-effects-loading'
import chup from './chup'

export default combineReducers({
  loading,
  chup,
})

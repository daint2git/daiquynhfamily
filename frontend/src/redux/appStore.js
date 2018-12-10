import { compose, applyMiddleware, createStore } from 'redux'
import stepsMiddleware from 'redux-effects-steps'
import ReduxEmitter from 'kuker-emitters/lib/ReduxEmitter'

import { loadingMiddleware } from 'redux/middlewares/redux-effects-loading'
import { axiosMiddleware, AXIOS } from 'redux/middlewares/redux-effects-axios'
import rootReducer from 'redux/reducers/rootReducer'

const appStore = (initalState = {}) => {
  const middlewares = [loadingMiddleware([AXIOS]), axiosMiddleware, stepsMiddleware]

  if (DEVELOPMENT) middlewares.push(ReduxEmitter())

  const enhancer = compose(applyMiddleware(...middlewares))
  const store = createStore(rootReducer, initalState, enhancer)

  return store
}

export default appStore

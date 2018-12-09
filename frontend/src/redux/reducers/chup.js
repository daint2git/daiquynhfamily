import { steps } from 'redux-effects-steps'
import { createAction, createErrorAction, handleActions, handleAction } from 'redux/utils'
import { fetch } from 'redux/reducers/axios'

const fetchListSuccess = createAction('FETCH_LIST_SUCCESS')
const fetchListFail = createErrorAction('FETCH_LIST_FAIL')

export const fetchList = url =>
  steps(
    fetch({
      method: 'get',
      url,
    }),
    [fetchListSuccess, fetchListFail],
  )

export const INITIAL_STATE = () => ({
  list: [],
})

export default handleActions([
  handleAction(fetchListSuccess, (state, payload) => ({
    ...state,
    list: payload,
  })),
  handleAction(fetchListFail, state => ({
    ...state,
  })),
])

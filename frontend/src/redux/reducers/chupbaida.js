import { steps } from 'redux-effects-steps'
import {
  createActionWithPrefix,
  createErrorActionWithPrefix,
  handleActions,
  handleAction,
} from 'redux/toolbelt'
import { fetch } from 'redux/reducers/axios'

const ROOT = 'CHUP_BAI_DA'
const action = createActionWithPrefix(ROOT)
const errorAction = createErrorActionWithPrefix(ROOT)

const fetchListSuccess = action('FETCH_LIST_SUCCESS')
const fetchListFail = errorAction('FETCH_LIST_FAIL')
export const fetchList = () =>
  steps(
    fetch({
      method: 'get',
      url: 'chupbaida',
    }),
    [fetchListSuccess, fetchListFail],
  )

const fetchNextListSuccess = action('FETCH_NEXT_LIST_SUCCESS')
const fetchNextListFail = errorAction('FETCH_NEXT_LIST_FAIL')
export const fetchNextList = () =>
  steps(
    fetch({
      method: 'get',
      url: 'chupbaida',
      params: { nextPage: true },
    }),
    [fetchNextListSuccess, fetchNextListFail],
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
  handleAction(fetchNextListSuccess, (state, payload) => ({
    ...state,
    list: [...state.list, ...payload],
  })),
  handleAction(fetchNextListFail, state => ({
    ...state,
  })),
])

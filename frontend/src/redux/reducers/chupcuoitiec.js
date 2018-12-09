import { steps } from 'redux-effects-steps'
import { createAction, createErrorAction, handleActions, handleAction } from 'redux/utils'
import { fetch } from 'redux/reducers/axios'

const createActionWithPrefix = name => createAction(`CHUP_CUOI_TIEC/${name}`)
const createErrorActionWithPrefix = name => createErrorAction(`CHUP_CUOI_TIEC/${name}`)

const fetchListSuccess = createActionWithPrefix('FETCH_LIST_SUCCESS')
const fetchListFail = createErrorActionWithPrefix('FETCH_LIST_FAIL')

export const fetchList = request =>
  steps(
    fetch({
      method: 'get',
      url: 'chupcuoitiec',
      ...request,
    }),
    [fetchListSuccess, fetchListFail],
  )

const fetchNextListSuccess = createAction('FETCH_NEXT_LIST_SUCCESS')
const fetchNextListFail = createErrorAction('FETCH_NEXT_LIST_FAIL')

export const fetchNextList = ({ nextPageToken }) =>
  steps(
    fetch({
      method: 'get',
      url: 'chupcuoitiec',
      params: {
        nextPage: true,
        nextPageToken,
      },
    }),
    [fetchNextListSuccess, fetchNextListFail],
  )

export const INITIAL_STATE = () => ({
  list: [],
  nextPageToken: '',
})

export default handleActions([
  handleAction(fetchListSuccess, (state, payload) => ({
    ...state,
    list: payload.files,
    nextPageToken: payload.nextPageToken,
  })),
  handleAction(fetchListFail, state => ({
    ...state,
  })),
  handleAction(fetchNextListSuccess, (state, payload) => ({
    ...state,
    list: [...state.list, ...payload.files],
    nextPageToken: payload.nextPageToken,
  })),
  handleAction(fetchNextListFail, state => ({
    ...state,
  })),
])

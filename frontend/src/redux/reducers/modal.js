import { createAction, handleActions, handleAction } from 'redux/toolbelt'

export const openModal = createAction('OPEN_MODAL')
export const closeModal = createAction('CLOSE_MODAL')

export const INITIAL_STATE = () => ({
  type: '',
  args: {},
})

export default handleActions(
  [
    handleAction(openModal, (state, payload) => ({
      ...state,
      type: payload.type,
      args: payload.args,
    })),
    handleAction(closeModal, state => ({
      ...state,
      type: INITIAL_STATE().type,
      args: INITIAL_STATE().args,
    })),
  ],
  INITIAL_STATE(),
)

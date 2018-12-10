import createAction from './createAction'

const createActionWithPrefix = prefixType => type => createAction(`${prefixType}/${type}`)

export default createActionWithPrefix

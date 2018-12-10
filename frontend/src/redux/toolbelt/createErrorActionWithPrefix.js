import createErrorAction from './createErrorAction'

const createErrorActionWithPrefix = prefix => name => createErrorAction(`${prefix}/${name}`)

export default createErrorActionWithPrefix

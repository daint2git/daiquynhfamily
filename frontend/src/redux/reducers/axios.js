import axios from 'axios'
import { createAction } from 'redux/utils'
import { AXIOS } from 'redux/middlewares/redux-effects-axios'

export const defaultAxios = axios.create({
  baseURL: DEVELOPMENT ? 'http://localhost:6969/api' : `${window.location.origin}/api`,
  timeout: 100000,
})

export const fetch = (request, instance = defaultAxios) =>
  createAction(AXIOS)({ request, instance })

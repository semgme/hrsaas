import { getToken, setToken, removeToken, setTimeStamp } from '@/utils/auth'
import { login, getInfo, getUserDetailById } from '@/api/user'
import { resetRouter } from '@/router'

const state = {
  token: getToken(),
  userInfo: {}
}
const mutations = {
  setToken(state, token) {
    state.token = token
    setToken(token)
  },
  removeToken(state) {
    state.token = null
    removeToken()
  },
  setUserInfo(state, data) {
    state.userInfo = data
  },
  removeUserInfo(state) {
    state.userInfo = {}
  }
}
const actions = {
  async login({ commit }, data) {
    const result = await login(data)
    commit('setToken', result)
    setTimeStamp()
  },
  async getUserInfo({ commit }) {
    const result = await getInfo()
    const baseInfo = await getUserDetailById(result.userId)
    commit('setUserInfo', { ...result, ...baseInfo })
    return result
  },
  logout({ commit }) {
    commit('removeToken')
    commit('removeUserInfo')
    resetRouter()
    commit('permission/setRoutes', [], { root: true })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

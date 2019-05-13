import Vue from 'Vue'
import Vuex from 'Vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projetos: []
  },
  mutations: {
    salvarProjeto (state, projeto) {
      state.projetos.push(projeto)
    }
  }
})

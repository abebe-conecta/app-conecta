import Vue from 'Vue'
import Vuex from 'Vuex'
import project from './modules/project'
import user from './modules/user'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    project,
    user
  },
  strict: debug
})

// export default new Vuex.Store({
//   state: {
//     projetos: []
//   },
//   mutations: {
//     salvarProjeto (state, projeto) {
//       state.projetos.push(projeto)
//     }
//   }
// })

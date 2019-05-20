// import Project from '../../api/project'

const state = {
  projetos: [],
  descricao: '',
  objetivo: '',
  formato: '',
  necessidade: '',
  local: '',
  valor: '',
  tags: '',
  imagem: ''
}

const getters = {
  projeto: state => {
    return {
      descricao: state.descricao,
      objetivo: state.objetivo,
      formato: state.formato,
      necessidade: state.necessidade,
      local: state.local,
      valor: state.valor,
      tags: state.tags,
      imagem: state.imagem
    }
  }
}

const actions = {

}

const mutations = {
  // setCurrentCourseId (state, id) {
  //   state.currentCourseId = id
  // },
  setProjetoDescricao (state, descricao) {
    state.descricao = descricao
  },
  setProjetoObjetivo (state, objetivo) {
    state.objetivo = objetivo
  },
  setProjetoFormato (state, formato) {
    state.formato = formato
  },
  setProjetoNecessidade (state, necessidade) {
    state.necessidade = necessidade
  },
  setProjetoLocal (state, local) {
    state.local = local
  },
  setProjetoValor (state, valor) {
    state.valor = valor
  },
  setProjetoTags (state, tags) {
    state.formato = tags
  },
  setProjetoImagem (state, imagem) {
    state.imagem = imagem
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

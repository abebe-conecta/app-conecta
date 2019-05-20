import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Login from '@/views/Login'
import Cadastrar from '@/views/Cadastrar'
import EnviarTelaUm from '@/views/EnviarTelaUm'
import TodosProjetos from '@/views/TodosProjetos'
import TituloRascunho from '@/views/TituloRascunho'
import PassoUm from '@/views/EnviarProjeto/PassoUm'
import PassoDois from '@/views/EnviarProjeto/PassoDois'
import PassoTres from '@/views/EnviarProjeto/PassoTres'
import PassoQuatro from '@/views/EnviarProjeto/PassoQuatro'
import ProjetoEnviado from '@/views/ProjetoEnviado'
import VisualizarProjeto from '@/views/VisualizarProjeto'
import ComoFunciona from '@/views/ComoFunciona'
import PerguntasFrequentes from '@/views/PerguntasFrequentes'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/como-funciona',
      name: 'ComoFunciona',
      component: ComoFunciona
    },
    {
      path: '/perguntas-frequentes',
      name: 'PerguntasFrequentes',
      component: PerguntasFrequentes
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/cadastro',
      name: 'Cadastro',
      component: Cadastrar
    },
    {
      path: '/enviar-projeto',
      name: 'EnviarTelaUm',
      component: EnviarTelaUm
    },
    {
      path: '/projetos',
      name: 'TodosProjetos',
      component: TodosProjetos
    },
    {
      path: '/projetos/:projetoId',
      name: 'Visualizar',
      component: VisualizarProjeto
    },
    {
      path: '/titulo-rascunho',
      name: 'TituloRascunho',
      component: TituloRascunho
    },
    {
      path: '/passo-um',
      name: 'PassoUm',
      component: PassoUm
    },
    {
      path: '/passo-dois',
      name: 'PassoDois',
      component: PassoDois
    },
    {
      path: '/passo-tres',
      name: 'PassoTres',
      component: PassoTres
    },
    {
      path: '/passo-quatro',
      name: 'PassoQuatro',
      component: PassoQuatro
    },
    {
      path: '/projeto-enviado',
      name: 'ProjetoEnviado',
      component: ProjetoEnviado
    }
  ]
})

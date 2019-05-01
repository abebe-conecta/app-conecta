import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Login from '@/views/Login'
import Cadastro from '@/views/Cadastro'
import EnviarTelaUm from '@/views/EnviarTelaUm'
import TodosProjetos from '@/views/TodosProjetos'
import TituloRascunho from '@/views/TituloRascunho'
import PassoUm from '@/views/EnviarProjeto/PassoUm'
import PassoDois from '@/views/EnviarProjeto/PassoDois'
import PassoTres from '@/views/EnviarProjeto/PassoTres'
import PassoQuatro from '@/views/EnviarProjeto/PassoQuatro'
import ProjetoEnviado from '@/views/ProjetoEnviado'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/cadastro',
      name: 'Cadastro',
      component: Cadastro
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

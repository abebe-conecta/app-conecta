import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/Home'
import login from '@/views/Login'
import EnviarTelaUm from '@/views/EnviarTelaUm'
import TodosProjetos from '@/views/TodosProjetos'
import TituloRascunho from '@/views/TituloRascunho'
import PassoUm from '@/views/PassoUm'
import PassoDois from '@/views/PassoDois'
import PassoTres from '@/views/PassoTres'
import PassoQuatro from '@/views/PassoQuatro'
import ProjetoEnviado from '@/views/ProjetoEnviado'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/login',
      name: 'login',
      component: login
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

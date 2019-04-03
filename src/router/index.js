import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/Home'
import login from '@/views/Login'
import enviar from '@/views/Enviar'
import allProjects from '@/views/allProjects'
// import projects from './views/Projects.vue'

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
      name: 'enviar',
      component: enviar
    },
    {
      path: '/projetos',
      name: 'allProjects',
      component: allProjects
    }
    // {
    //   path: '/projetos',
    //   name: 'projetos',
    //   component: projects
    // }
  ]
})
